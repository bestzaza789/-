"use client";
import Image from "next/image";

import line from "../img/line.png";
import qrcode from "../img/qrcode.png";

export default function Contacts() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center  m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <Image src={line} alt="line" className="w-[150px]" />
        <div className="text-xl m-5">Line Id: 0987898949</div>
        <Image src={qrcode} alt="line qrcode" className="w-[150px]" />
      </div>
    </div>
  );
}
