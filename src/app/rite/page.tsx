"use client";
import Image from "next/image";
import rite1 from "../img/rite1.png";
import rite2 from "../img/rite2.png";
import rite3 from "../img/rite3.png";
import line from "../img/line.png";
import Link from "next/link";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="flex">
          <Image
            src={rite1}
            alt="history"
            className="md:w-[300px] w-[100px] my-[20px] mx-1"
          />
          <Image
            src={rite2}
            alt="history"
            className="md:w-[300px] w-[100px] my-[20px] mx-1"
          />
          <Image
            src={rite3}
            alt="history"
            className="md:w-[300px] w-[100px] my-[20px] mx-1"
          />
        </div>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ติดต่องาน พิธีกรรมบวงสรวง ทั่วประเทศ นัดหมายอาจารย์ตำหนักเซียน
          คลิกที่ปุ่มข้างล่างนี้เลย
        </h1>
        <Link href="/contact">
          <Image src={line} alt="line" className="w-[100px] md:w-[150px]" />
        </Link>
      </div>
    </div>
  );
}
