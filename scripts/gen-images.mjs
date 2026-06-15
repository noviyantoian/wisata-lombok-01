// Generate site imagery via fal.ai (nano-banana-2) and download to public/images.
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) throw new Error("FAL_KEY missing");

const OUT = path.resolve("public/images");
await mkdir(OUT, { recursive: true });

const STYLE =
  "professional travel photography, natural light, ultra detailed, high dynamic range, no text, no watermark, no people posing at camera";

const JOBS = [
  {
    name: "hero",
    size: "landscape_16_9",
    prompt: `Breathtaking wide aerial view of the Gili Islands near Lombok Indonesia, turquoise and emerald sea, white sand beach, a traditional wooden pinisi boat, palm trees, Mount Rinjani silhouette on the horizon at warm golden hour, cinematic, ${STYLE}`,
  },
  {
    name: "rinjani",
    size: "portrait_4_3",
    prompt: `Mount Rinjani volcano Lombok at sunrise, crater rim trekking trail, climbers in distance, Segara Anak crater lake, dramatic clouds, lush green ridge, ${STYLE}`,
  },
  {
    name: "gili",
    size: "portrait_4_3",
    prompt: `Gili Trawangan island Lombok, crystal clear turquoise water, swing over the sea, white sand, snorkelers, palm trees, bright tropical day, ${STYLE}`,
  },
  {
    name: "pink-beach",
    size: "portrait_4_3",
    prompt: `Pink Beach (Pantai Pink) Lombok Indonesia, soft pink coral sand meeting clear blue water, rocky headlands, gentle waves, sunny day, ${STYLE}`,
  },
  {
    name: "senggigi",
    size: "portrait_4_3",
    prompt: `Senggigi beach Lombok at sunset, calm bay, fishing boats, coconut palms, orange and purple sky reflecting on water, ${STYLE}`,
  },
  {
    name: "kuta-lombok",
    size: "portrait_4_3",
    prompt: `Kuta Lombok south coast, Merese hill viewpoint, rolling green grass hills, sweeping bays with white sand, turquoise ocean, dramatic coastline, ${STYLE}`,
  },
  {
    name: "pkg-gili",
    size: "landscape_4_3",
    prompt: `Snorkeling open trip near Gili islands Lombok, colorful coral reef and tropical fish, sea turtle, clear shallow turquoise water from above, traditional boat anchored, ${STYLE}`,
  },
  {
    name: "pkg-rinjani",
    size: "landscape_4_3",
    prompt: `Trekking expedition to Mount Rinjani summit Lombok, hikers with backpacks on volcanic ridge above clouds, tents at sunrise camp, epic mountain scenery, ${STYLE}`,
  },
  {
    name: "pkg-pink",
    size: "landscape_4_3",
    prompt: `Boat day tour at Pink Beach south Lombok, pink sand shoreline, snorkeling gear on a wooden boat, calm blue sea, sunny tropical day, ${STYLE}`,
  },
  {
    name: "pkg-sasak",
    size: "landscape_4_3",
    prompt: `Traditional Sasak village Sade Lombok, thatched bamboo houses, woven textiles ikat, lush rice terraces and a tropical waterfall nearby, cultural travel, ${STYLE}`,
  },
];

// testimonial avatars
for (let i = 1; i <= 6; i++) {
  JOBS.push({
    name: `avatar-${i}`,
    size: "square",
    prompt: `Candid friendly headshot portrait of a happy Indonesian tourist on a Lombok beach vacation, natural smile, soft daylight, shallow depth of field, ${STYLE}`,
    seed: 1000 + i * 7,
  });
}

async function gen(job) {
  const body = {
    prompt: job.prompt,
    image_size: job.size,
    num_images: 1,
  };
  if (job.seed) body.seed = job.seed;
  const res = await fetch("https://fal.run/fal-ai/nano-banana-2", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${job.name}: HTTP ${res.status} ${await res.text()}`);
  const data = await res.json();
  const url = data.images?.[0]?.url;
  if (!url) throw new Error(`${job.name}: no image url`);
  const img = await fetch(url);
  const buf = Buffer.from(await img.arrayBuffer());
  const file = path.join(OUT, `${job.name}.png`);
  await writeFile(file, buf);
  console.log(`✓ ${job.name}.png (${(buf.length / 1024).toFixed(0)} KB)`);
}

// run with limited concurrency
const POOL = 4;
let idx = 0;
async function worker() {
  while (idx < JOBS.length) {
    const job = JOBS[idx++];
    try {
      await gen(job);
    } catch (e) {
      console.error(`✗ ${job.name}: ${e.message}`);
    }
  }
}
await Promise.all(Array.from({ length: POOL }, worker));
console.log("DONE");
