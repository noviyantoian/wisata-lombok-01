import type { BookingData } from "./types";
import { WA_NUMBER, formatRupiah } from "./packages";

/** Format ISO date (yyyy-mm-dd) jadi "Senin, 15 Juni 2026". */
function formatDateID(iso: string): string {
  if (!iso) return "-";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function totalLabel(data: BookingData): string {
  if (data.packagePrice === "custom" || !data.estimatedTotal) {
    return "Custom (mohon dibantu kalkulasi)";
  }
  return `Rp ${formatRupiah(data.estimatedTotal)}/grup`;
}

/** Bangun pesan WhatsApp terstruktur sesuai template PRD. */
export function buildWaMessage(data: BookingData): string {
  return [
    "🌴 *PEMESANAN WISATA LOMBOK*",
    "——————————————",
    `📦 *Paket:* ${data.packageName}`,
    `⏱ *Durasi:* ${data.duration || "-"}`,
    `👥 *Peserta:* ${data.pax}`,
    `📅 *Tanggal:* ${formatDateID(data.departureDate)}`,
    `💰 *Estimasi Harga:* ${totalLabel(data)}`,
    "",
    `👤 *Nama:* ${data.name}`,
    `📱 *WA:* ${data.whatsapp}`,
    `✉️ *Email:* ${data.email || "-"}`,
    `🏙️ *Kota Asal:* ${data.city}`,
    "",
    "📝 *Catatan:*",
    `${data.notes || "-"}`,
    "",
    `📣 *Sumber Info:* ${data.referralSource || "-"}`,
    "——————————————",
    "Mohon konfirmasi ketersediaan dan detail pembayaran. Terima kasih! 🙏",
  ].join("\n");
}

/** wa.me deep link siap dibuka via window.open(). */
export function buildWaLink(data: BookingData): string {
  const text = encodeURIComponent(buildWaMessage(data));
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

/** Link WA umum (tanpa data form) untuk tombol floating / CTA cepat. */
export function buildQuickWaLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      "Halo NusaJelajah! 👋 Saya mau tanya-tanya soal paket wisata Lombok.",
  );
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}
