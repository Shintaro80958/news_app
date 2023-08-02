// prettier-ignore
'use client'

import { useRouter } from "next/navigation";
import { BackButton } from "./back_button";

export default function Header(props) {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <div className="grid grid-cols-5 py-3 mx-auto bg-lime-100 col-auto">
      <div className="col-span-1 flex justify-center" onClick={handleClick}>
        {props.isNewsPage ? <BackButton /> : null}
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 flex justify-center">
        <p className="text-2xl font-sans">ニュースアプリ</p>
      </div>
    </div>
  );
}
