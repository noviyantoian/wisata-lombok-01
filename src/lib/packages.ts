import type {
  TourPackage,
  Destination,
  Testimonial,
  Stat,
  SelectOption,
} from "./types";

/**
 * WhatsApp business number for wa.me deep links.
 * NOTE: placeholder — ganti dengan nomor WA Business agensi sebelum go-live.
 * Format internasional tanpa "+" / "0" awal (62 + nomor).
 */
export const WA_NUMBER = "6281917090807";
export const BRAND = "NusaJelajah";

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID").format(value);
}

export function getPackage(id: string): TourPackage | undefined {
  return PACKAGES.find((p) => p.id === id);
}

export function getDestination(id: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.id === id);
}

export const PACKAGES: TourPackage[] = [
  {
    id: "gili-snorkeling",
    name: "Gili Trio Snorkeling",
    type: "open_trip",
    category: "snorkeling",
    duration: "1 Hari · Sunrise–Sunset",
    pricePerPerson: 350000,
    image: "/images/pkg-gili.jpg",
    coverEmoji: "🐠",
    isFeatured: true,
    description:
      "Satu hari penuh menyusuri tiga Gili paling ikonik di Lombok. Lompat dari boat kayu langsung ke air sebening kaca, berenang bareng penyu hijau, dan kunjungi patung underwater yang viral. Cocok untuk pemula maupun pehobi — guide selalu siaga di air dan foto bawah lautmu kami abadikan gratis.",
    highlights: [
      "3 spot snorkeling Gili Trawangan, Meno & Air",
      "Spot penyu & patung underwater",
      "Hopping island pakai boat lokal",
      "Dokumentasi GoPro gratis",
    ],
    includes: [
      "Boat & alat snorkeling",
      "Guide & pemandu foto",
      "Air mineral + snack",
      "Asuransi perjalanan",
    ],
    excludes: ["Transport ke pelabuhan", "Makan siang", "Pengeluaran pribadi"],
    meetingPoint: "Pelabuhan Bangsal, Pemenang (08.00 WITA)",
    itinerary: [
      { title: "08.00 · Briefing & berangkat", detail: "Kumpul di pelabuhan, fitting alat snorkeling, boat menuju Gili Trawangan." },
      { title: "09.00 · Spot penyu", detail: "Snorkeling di turtle point, berenang bersama penyu hijau." },
      { title: "11.30 · Patung underwater", detail: "Hunting foto di patung bawah laut Gili Meno." },
      { title: "14.00 · Gili Air & pulang", detail: "Free time pantai Gili Air, kembali ke pelabuhan sore hari." },
    ],
  },
  {
    id: "rinjani-trek",
    name: "Rinjani Summit Trek",
    type: "private_trip",
    category: "trekking",
    duration: "3 Hari 2 Malam",
    pricePerPerson: 1850000,
    image: "/images/pkg-rinjani.jpg",
    coverEmoji: "🌋",
    isFeatured: true,
    badge: "Terpopuler",
    description:
      "Pendakian legendaris ke puncak Rinjani 3.726 mdpl, atap Pulau Lombok. Tiga hari menembus padang sabana, bermalam di tepi kawah, dan menatap sunrise di summit yang tak terlupakan. Ditemani guide bersertifikat dan porter berpengalaman — kamu cukup fokus menikmati perjalanan.",
    highlights: [
      "Summit 3.726 mdpl & Danau Segara Anak",
      "Porter + guide bersertifikat",
      "Camping gear lengkap disiapkan",
      "Air panas alami & spot mancing",
    ],
    includes: [
      "Tiket TN Gunung Rinjani",
      "Tenda, sleeping bag, matras",
      "3x makan/hari + porter",
      "Transport PP basecamp",
    ],
    excludes: ["Sewa sepatu/jaket gunung", "Tip porter (opsional)", "Asuransi tambahan"],
    meetingPoint: "Basecamp Sembalun (penjemputan dari Mataram tersedia)",
    itinerary: [
      { title: "Hari 1 · Sembalun → Pelawangan", detail: "Trek melewati padang sabana, camp pertama di Pelawangan Sembalun." },
      { title: "Hari 2 · Summit attack & Segara Anak", detail: "Sunrise di puncak 3.726 mdpl, turun ke Danau Segara Anak & air panas." },
      { title: "Hari 3 · Senaru → pulang", detail: "Turun via jalur Senaru, mampir air terjun, kembali ke titik jemput." },
    ],
  },
  {
    id: "pink-beach",
    name: "Pink Beach & Lombok Selatan",
    type: "open_trip",
    category: "snorkeling",
    duration: "1 Hari",
    pricePerPerson: 450000,
    image: "/images/pkg-pink.jpg",
    coverEmoji: "🏖️",
    isFeatured: false,
    description:
      "Jelajahi sisi tenggara Lombok yang masih sepi turis. Pasir merah muda langka di Pantai Pink, snorkeling di Gili Petelu, jejak sejarah Goa Jepang, sampai tebing dramatis Tanjung Ringgit. Ditutup makan siang seafood segar dengan pemandangan laut biru.",
    highlights: [
      "Pasir pink ikonik Lombok Timur",
      "Snorkeling Gili Petelu",
      "Goa Jepang & Tanjung Ringgit",
      "Makan siang seafood di tepi pantai",
    ],
    includes: [
      "Transport AC PP",
      "Boat & alat snorkeling",
      "Makan siang seafood",
      "Tiket masuk & guide",
    ],
    excludes: ["Pengeluaran pribadi", "Tip guide (opsional)"],
    meetingPoint: "Penjemputan hotel area Mataram/Senggigi (06.30 WITA)",
    itinerary: [
      { title: "06.30 · Penjemputan", detail: "Dijemput dari hotel, perjalanan menuju Lombok Timur." },
      { title: "10.00 · Pantai Pink & snorkeling", detail: "Main di pasir pink, snorkeling di Gili Petelu." },
      { title: "13.00 · Makan siang seafood", detail: "Santap seafood segar di tepi pantai." },
      { title: "14.30 · Goa Jepang & Tanjung Ringgit", detail: "Eksplor situs sejarah & tebing, kembali sore hari." },
    ],
  },
  {
    id: "sasak-culture",
    name: "Sasak Heritage & Air Terjun",
    type: "private_trip",
    category: "city_tour",
    duration: "2 Hari 1 Malam",
    pricePerPerson: 950000,
    image: "/images/pkg-sasak.jpg",
    coverEmoji: "🛖",
    isFeatured: false,
    description:
      "Trip privat yang memadukan budaya dan alam Lombok. Menyusuri desa adat Sade dengan rumah bambu dan tenun ikat, menyegarkan diri di air terjun Tiu Kelep & Sendang Gile, lalu menikmati teluk biru dari Bukit Merese. Itinerary fleksibel — bisa disesuaikan dengan keluargamu.",
    highlights: [
      "Desa adat Sade & tenun ikat",
      "Air terjun Tiu Kelep & Sendang Gile",
      "Bukit Merese & Pantai Tanjung Aan",
      "Kuliner ayam taliwang autentik",
    ],
    includes: [
      "Mobil + driver/guide privat",
      "1 malam hotel + sarapan",
      "Tiket masuk semua objek",
      "Air mineral sepanjang trip",
    ],
    excludes: ["Makan siang & malam", "Pengeluaran pribadi", "Tip driver (opsional)"],
    meetingPoint: "Penjemputan bandara/hotel sesuai kesepakatan",
    itinerary: [
      { title: "Hari 1 · Desa Sade & Selatan", detail: "Desa adat Sade, Pantai Tanjung Aan, sunset di Bukit Merese." },
      { title: "Hari 1 malam · Menginap", detail: "Check-in hotel, kuliner ayam taliwang autentik." },
      { title: "Hari 2 · Air terjun Utara", detail: "Tiu Kelep & Sendang Gile, kembali ke titik jemput." },
    ],
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: "rinjani",
    name: "Gunung Rinjani",
    tagline: "Atap Lombok, 3.726 mdpl",
    image: "/images/rinjani.jpg",
    span: "tall",
    description:
      "Gunung berapi aktif tertinggi kedua di Indonesia, dengan kaldera megah berisi Danau Segara Anak berwarna biru toska. Jalur pendakiannya melewati padang sabana, hutan tropis, dan tepi kawah dengan panorama sunrise yang jadi impian para pendaki Nusantara.",
    activities: ["Trekking summit", "Camping tepi kawah", "Berendam air panas", "Mancing di danau"],
    bestTime: "April–Desember (musim kemarau)",
    travelTime: "± 2,5 jam dari Mataram",
    relatedPackageIds: ["rinjani-trek"],
  },
  {
    id: "gili",
    name: "Tiga Gili",
    tagline: "Surga snorkeling & penyu",
    image: "/images/gili.jpg",
    description:
      "Trio pulau kecil — Trawangan, Meno, dan Air — dengan air sebening kristal dan terumbu karang yang hidup. Bebas kendaraan bermotor, kamu cukup jalan kaki atau naik cidomo. Spot terbaik di Lombok untuk berenang bersama penyu dan menikmati sunset di ayunan laut.",
    activities: ["Snorkeling & diving", "Berenang dengan penyu", "Sunset di ayunan", "Bersepeda keliling pulau"],
    bestTime: "Sepanjang tahun, terbaik Mei–September",
    travelTime: "± 1,5 jam + 15 menit boat dari Mataram",
    relatedPackageIds: ["gili-snorkeling"],
  },
  {
    id: "pink-beach",
    name: "Pink Beach",
    tagline: "Pasir merah muda langka",
    image: "/images/pink-beach.jpg",
    description:
      "Salah satu dari sedikit pantai berpasir merah muda di dunia, hasil pecahan koral merah yang membaur dengan pasir putih. Terletak di Lombok Timur yang masih sepi, airnya tenang dan jernih — sempurna untuk snorkeling santai dan berburu foto.",
    activities: ["Snorkeling Gili Petelu", "Foto pasir pink", "Eksplor Goa Jepang", "Tebing Tanjung Ringgit"],
    bestTime: "April–Oktober",
    travelTime: "± 2,5 jam dari Mataram",
    relatedPackageIds: ["pink-beach"],
  },
  {
    id: "kuta-lombok",
    name: "Kuta & Merese",
    tagline: "Bukit hijau & teluk biru",
    image: "/images/kuta-lombok.jpg",
    span: "wide",
    description:
      "Pesisir selatan Lombok yang sedang naik daun: deretan teluk berpasir putih, ombak kelas dunia untuk surfing, dan Bukit Merese dengan padang rumput hijau menghadap laut. Suasananya santai dengan kafe dan penginapan yang makin lengkap.",
    activities: ["Surfing", "Sunset Bukit Merese", "Pantai Tanjung Aan", "Kuliner & kafe"],
    bestTime: "Mei–September",
    travelTime: "± 1 jam dari Bandara Lombok",
    relatedPackageIds: ["sasak-culture"],
  },
  {
    id: "senggigi",
    name: "Senggigi",
    tagline: "Sunset terbaik di barat",
    image: "/images/senggigi.jpg",
    description:
      "Kawasan wisata pesisir barat Lombok yang paling matang fasilitasnya. Garis pantai melengkung dengan teluk tenang, resor tepi laut, dan sunset oranye yang melegenda. Titik awal ideal sebelum menyeberang ke Gili.",
    activities: ["Santai di pantai", "Sunset point", "Pura Batu Bolong", "Kuliner tepi laut"],
    bestTime: "Sepanjang tahun",
    travelTime: "± 30 menit dari Mataram",
    relatedPackageIds: ["gili-snorkeling", "sasak-culture"],
  },
];

export const STATS: Stat[] = [
  { value: "4.200+", label: "Tamu dilayani" },
  { value: "8 thn", label: "Berpengalaman sejak 2016" },
  { value: "4.9★", label: "320+ ulasan Google" },
  { value: "100%", label: "Guide lokal bersertifikat" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dinda Pramesti",
    origin: "Jakarta",
    trip: "Rinjani Summit Trek",
    rating: 5,
    text: "Guide-nya sabar banget nemenin sampai puncak. Semua logistik beres, tinggal jalan. Sunrise di summit bikin nangis terharu!",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Reza Maulana",
    origin: "Surabaya",
    trip: "Gili Trio Snorkeling",
    rating: 5,
    text: "Booking lewat WA cepet, harga sesuai yang di web, gak ada biaya tiba-tiba. Foto underwater-nya bonus banget.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Sarah Wijaya",
    origin: "Bandung",
    trip: "Pink Beach & Lombok Selatan",
    rating: 5,
    text: "Pink Beach se-cantik itu aslinya. Driver ramah, seafood-nya enak. Recommended buat yang first time ke Lombok.",
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Andi Kurniawan",
    origin: "Makassar",
    trip: "Sasak Heritage",
    rating: 5,
    text: "Private trip-nya fleksibel, bisa request mampir warung kopi lokal. Anak-anak happy, istri happy. Mantap NusaJelajah.",
    avatar: "/images/avatar-4.jpg",
  },
  {
    name: "Lia Hartono",
    origin: "Semarang",
    trip: "Gili Trio Snorkeling",
    rating: 5,
    text: "Pertama kali snorkeling, dipandu dari nol sampai berani. Aman, alat bersih, guide siaga terus di air.",
    avatar: "/images/avatar-5.jpg",
  },
  {
    name: "Bagus Saputra",
    origin: "Yogyakarta",
    trip: "Rinjani Summit Trek",
    rating: 5,
    text: "Porter & makanan di gunung di luar ekspektasi. Worth every rupiah. Bakal trip lagi bareng tim ini.",
    avatar: "/images/avatar-6.jpg",
  },
];

export const PAX_OPTIONS: SelectOption[] = [
  { value: "1", label: "1 orang (solo)" },
  { value: "2", label: "2 orang" },
  { value: "3-5", label: "3–5 orang" },
  { value: "6-10", label: "6–10 orang" },
  { value: "11+", label: "11+ orang (rombongan)" },
];

export const REFERRAL_OPTIONS: SelectOption[] = [
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "google", label: "Google Search" },
  { value: "teman", label: "Rekomendasi teman" },
  { value: "lainnya", label: "Lainnya" },
];

/** Representative pax count untuk estimasi total harga. */
export const PAX_REPRESENTATIVE: Record<string, number> = {
  "1": 1,
  "2": 2,
  "3-5": 3,
  "6-10": 6,
  "11+": 11,
};
