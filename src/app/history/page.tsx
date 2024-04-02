"use client";
import Image from "next/image";
import history from "../img/history.png";

export default function History() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  ">
        <Image
          src={history}
          alt="history"
          className="w-[500px] my-[20px] animate-fade-down animate-once animate-ease-in-out"
        />
        <h1 className="text-[15px] md:text-[30px] my-[20px] text-start animate-fade-up animate-once animate-ease-in-out">
          สถานธรรม ตำหนักเซียน 12 องค์เทพ จังหวัด พิษณโลก (เดิมชื่อ
          ตำหนักเซียนเรือนเพชรลานนา) ตั้งอยู่ อำเภอวัดโบสถ์
        </h1>
        <h1 className="text-[15px] md:text-[30px] my-[20px] text-start animate-fade-up animate-once animate-ease-in-out">
          ก่อตั้ง โดย อาจารย์หาริ เพชรลานน์ และศรัทธาบุญจากศิษยานุศิษย์ทั่วโลก
          เมื่อวันที่ 13 กรกฎาคม พ.ศ. 2564
        </h1>
        <h1 className="text-[15px] md:text-[30px] my-[20px] text-start animate-fade-up animate-once animate-ease-in-out">
          12 องค์เทพ ประกอบด้วย ไท่เสียงเหล่ากุง พระแม่กวนอิม ลื่อทงปิง
          น่าไฉ่ฮั้ว ฮั่นเชียงจื่อ เช่าก๊กกู๋ เตียวกั๋วเล่า ทิก๊วยลี้
          ฮ้อเซียนโกว ฮั่งเจ็งลี้ ซำง้วน และ ปู่ชีวกโกมารภัทร
        </h1>
      </div>
    </div>
  );
}
