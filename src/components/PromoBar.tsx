import { SparkleIcon } from "./icons";

export default function PromoBar() {
  return (
    <div className="relative z-50 bg-coral text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[13px] font-medium sm:text-sm">
        <SparkleIcon className="hidden h-4 w-4 shrink-0 sm:block" />
        <p>
          <span className="font-bold">Promo Liburan Sekolah</span> — diskon{" "}
          <span className="font-bold">15%</span> untuk booking grup 6+ orang.
          Slot Juni–Juli terbatas.
        </p>
      </div>
    </div>
  );
}
