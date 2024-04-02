"use client";
import Image from "next/image";
import news1 from "../img/news1.png";
import news2 from "../img/news2.png";
import news3 from "../img/news3.png";
import news4 from "../img/news4.png";
import news5 from "../img/news5.png";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  ">
        <div className="flex animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <Image
            src={news1}
            alt="history"
            className="hidden md:flex md: md:w-[300px] md:my-[20px] md:mx-2 my-[20px] mx-2 w-[150px]"
          />
          <Image
            src={news2}
            alt="history"
            className="md:w-[500px] md:my-[20px] md:mx-1 my-[20px] mx-2 w-[150px]"
          />
          <Image
            src={news3}
            alt="history"
            className="md:w-[300px] md:my-[20px] md:mx-1 my-[20px] mx-2 w-[100px]"
          />
        </div>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          งานบวงสรวง ตำหนักเซียน 12 องค์เทพ จังหวัดพิษณโลก วันที่ 13 กรกฏาคม
          พ.ศ. 2567 เวลา 09.59 น.
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          กำหนดการเดินทางจากกรุงเทพ วันที่ 12 กรกฏาคม พ.ศ. 2567 เวลา 16.59 น.
          ปตท.สำนักงานใหญ่ วิภาวดี-รังสิต ผู้ประสานงาน อ.จุ้ย โทร 095-5914692
          นอน ปายรีสอร์ท เข้าร่วมพิธีเช้าวันที่ 13 และ ไปไหว้พระพุทธชินราช
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          กำหนดการเดินทางกลับกรุงเทพ วันที่ 13 กรกฏาคม พ.ศ. 2567
          เดินทางกลับกรุงเทพเวลา 16.30 น. (ค่าใช้จ่ายเดินทาง 2,000 บาท แบ่งชำระ
          ได้ 4 เดือน(มี.ค-มิ.ย)เดือนละ 500 บาท)
        </h1>
        <div className="flex animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <Image
            src={news4}
            alt="history"
            className="md:w-[500px] md:my-[20px] md:mx-2 my-[20px] mx-2 w-[150px]"
          />
          <Image
            src={news5}
            alt="history"
            className="md:w-[300px] md:my-[20px] md:mx-2 my-[20px] mx-2 w-[100px]"
          />
        </div>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          เชิญชวนกัลยาณมิตรร่วมเป็นสะพานบุญ สร้าง
          ”หอพุทธชินราชปาฏิหาริย์“เพื่อประดิษฐาน องค์พระพุทธชินราช” หลวงพ่อทันใจ
          พระศรีอริยเมตไตรย หลวงปู่ทวด หลวงพ่อโต ฯ
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          สมทบร่วมจัดสร้าง “หอพระพุทธชินราชปาฏิหาริย์” 50 กอง(กองละ 9,999.99
          บาท)
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          โอนทำบุญ บัญชี ผู้ดูแลตำหนักพระแม่กวนอิมพันมือ(นาทวี) ธนาคารไทยพาณิชย์
          สาขานาทวี (สงขลา) ชื่อบัญชี คุณแม่ปิยะดา แซ่ลิ่ม เลขบัญชี 413-193630-6
        </h1>
      </div>
    </div>
  );
}
