"use client";
import Image from "next/image";
import HJ1 from "../img/HJ1.png";
import HJ2 from "../img/HJ2.png";
import HJ3 from "../img/HJ3.png";
import line from "../img/line.png";
import Link from "next/link";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center  m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="flex">
          <Image
            src={HJ1}
            alt="history"
            className="md:w-[300px] w-[150px] my-[20px] mx-2"
          />
          <Image
            src={HJ2}
            alt="history"
            className="md:w-[300px] w-[150px] my-[20px] mx-2"
          />
          <Image
            src={HJ3}
            alt="history"
            className="md:w-[300px] w-[150px] my-[20px] mx-2"
          />
        </div>

        <h1 className=" text-[30px] my-[20px] text-center">
          จัดฮวงจุ้ยมังกร 4 จตุรทิศ ทั่วประเทศ (ศาสตร์ดาว 9 ยุค)
          นัดหมายอาจารย์ตำหนักเซียน คลิกที่ปุ่มข้างล่างนี้เลย
        </h1>
        <Link href="/contact">
          <Image src={line} alt="line" className="w-[150px]" />
        </Link>
      </div>
    </div>
  );
}
