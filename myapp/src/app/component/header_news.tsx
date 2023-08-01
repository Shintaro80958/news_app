"use client";
import { useRouter } from "next/navigation";

export default function HeaderNews() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <div className="grid grid-cols-5 py-3 mx-auto bg-lime-100 col-auto">
      <div
        className="col-span-1 flex justify-center px-4 py-1 mx-auto bg-lime-600 rounded-full"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 flex justify-center">
        <p className="text-2xl font-sans">ニュースアプリ</p>
      </div>
    </div>
  );
}
