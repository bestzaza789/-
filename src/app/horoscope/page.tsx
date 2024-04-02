"use client";
import Image from "next/image";
import HR1 from "../img/HR1.png";
import HR2 from "../img/HR2.png";
import HR3 from "../img/HR3.png";
import HR4 from "../img/HR4.png";
import line from "../img/line.png";
import Link from "next/link";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="flex">
          <Image
            src={HR1}
            alt="history"
            className="hidden md:flex md:w-[300px] w-[100px]  my-[10px] md:my-[20px] mx-2"
          />
          <Image
            src={HR2}
            alt="history"
            className="md:w-[300px] w-[150px] my-[10px] md:my-[20px] mx-2"
          />
          <Image
            src={HR3}
            alt="history"
            className=" md:w-[300px] w-[150px] my-[10px] md:my-[20px] mx-2"
          />
        </div>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ดูดวงไพ่ยิปซี ดูดวงไพ่สามก๊ก ดูดวงไพ่พรหมญาณ นัดหมายอาจารย์ตำหนักเซียน
          คลิกที่ปุ่มข้างล่างนี้เลย
        </h1>
        <Link href="/contact">
          <Image src={line} alt="line" className="w-[100px] md:w-[150px]" />
        </Link>
        <div className="flex">
          <Image
            src={HR4}
            alt="history"
            className="w-[1000px] my-[10px] md:my-[20px] mx-2"
          />
        </div>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ลงหน้าพระลักษณ์หน้าทอง ทั่วประเทศ นัดหมายอาจารย์ตำหนักเซียน
          คลิกที่ปุ่มข้างล่างนี้เลย
        </h1>
        <Link href="/contact">
          <Image src={line} alt="line" className="w-[100px] md:w-[150px]" />
        </Link>
      </div>
    </div>
  );
}
