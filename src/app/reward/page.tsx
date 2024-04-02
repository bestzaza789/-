"use client";
import Image from "next/image";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center  m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <Image
          src="https://lh3.googleusercontent.com/d/1p8kqHQf6BSP6V5L7n5EEw1c7TyctfUk6"
          width="1500"
          height="1000"
          alt="reward"
          className="md:w-[500px] w-[300px] my-[20px] mx-2"
        />
        <h1 className=" text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          รางวัลกินรีทอง ครั้งที่ 9 ปี พ.ศ. 2567
        </h1>
        <Image
          src="https://lh3.googleusercontent.com/d/1GPZanLZJuLNJpUVQCJyNzZjlgDvJdRo1"
          width="1500"
          height="800"
          alt="reward"
          className="md:w-[500px] w-[300px] my-[20px] mx-2"
        />
        <h1 className=" text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          รางวัลกินรีทอง ครั้งที่ 8 ปี พ.ศ. 2566
        </h1>
        <Image
          src="https://lh3.googleusercontent.com/d/1onm38Twm3piQmBOVLW2VKFdlB_h9Mggo"
          width="1500"
          height="800"
          alt="reward"
          className="md:w-[500px] w-[300px] my-[20px] mx-2"
        />

        <h1 className=" text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          เกียรติรางวัล อ.หาริ เพชรลานน์ ผู้ก่อตั้ง ตำหนักเซียน 12 องค์เทพ
        </h1>
      </div>
    </div>
  );
}
