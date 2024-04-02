"use client";
import Image from "next/image";
import apply1 from "../img/apply1.png";
import apply2 from "../img/apple2.png";
import { Button } from "@chakra-ui/react";
export default function ApplyMembership() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center w-2/3 m-[50px] p-[20px] py-[20px] rounded-xl shadow-md shadow-slate-700 animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <Image
          className="md:max-w-[600px]"
          src={apply2}
          alt="สมัคร ศิษย์ก้นกุฏิ สมัครโปร 300 บาท"
        />
        <div>
          <h1 className="text-start text-[10px] md:text-[30px] m-[20px]">
            ได้ปันผลศิษย์ก้นกุฏิ ทุก 15 วัน 6% ที่มีการแนะนำส่วนตัว ตลอดไปเลย
          </h1>
          <h1 className="text-start text-[10px] md:text-[30px] m-[20px]">
            ถ้าทุกรอบ 15 วัน บอกบุญได้ 1 รายการ ศิษย์ก้นกุฏิ
            จะได้แต้มบุญบอกบุญพิเศษหารกัน อีก 2% ด้วย
          </h1>
        </div>

        <div className="">
          <a
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded "
            href="https://docs.google.com/forms/d/e/1FAIpQLSdhOOn-5nqKoNOgoC4eq8VsnWyTlrV-inXP5ee7s7u5SZDG5w/viewform"
          >
            คลิกที่ปุ่มข้างล่างนี้เลย
          </a>
        </div>
      </div>
    </div>
  );
}
