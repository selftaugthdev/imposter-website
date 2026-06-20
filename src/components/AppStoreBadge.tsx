import { APP_STORE_URL } from "@/lib/constants";

export default function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-black transition-transform hover:scale-[1.03] active:scale-[0.98] ${className}`}
    >
      <svg viewBox="0 0 384 512" className="h-7 w-7 fill-black">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37.4 59 129 107.2 127.4 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-83.5 102.6-121-65.2-30.7-61.7-90-61.7-92.4zM255.1 64.4c25.6-30.5 23.3-58.3 22.5-68.4-22.4 1.3-48.3 15.2-63 32.3-16.2 18.1-25.8 40.5-23.8 65.9 24.1 1.9 46.2-10.7 64.3-29.8z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[11px] font-medium">Download on the</span>
        <span className="text-xl font-semibold leading-tight">App Store</span>
      </span>
    </a>
  );
}
