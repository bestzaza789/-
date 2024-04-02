"use client";
import Image from "next/image";
import courseHR1 from "../img/courseHR1.png";
import courseHR2 from "../img/courseHR2.png";
import courseTL1 from "../img/courseTL1.png";
import courseTL2 from "../img/courseTL2.png";
import courseN1 from "../img/courseN1.png";
import courseN2 from "../img/courseN2.png";
import courseHJ1 from "../img/courseHJ1.png";
import courseHJ2 from "../img/courseHJ2.png";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="flex">
          <Image
            src={courseHR1}
            alt="history"
            className="w-[100px] my-[10px] md:my-[20px] mx-2 md:w-[300px] "
          />
          <Image
            src={courseHR2}
            alt="history"
            className="w-[150px] md:w-[400px] my-[10px] md:my-[20px] mx-2"
          />
        </div>
        <div>
          <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
            คอร์สสอน..ดูดวงไพ่ยิปซี ขั้น แอดวานซ์ สอนทุกวันอาทิตย์
          </h1>
          <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
            ถูกต้องตามหลักโหราศาสตร์ วิชาตำหนักเซียน 12 องค์เทพ การันตีการสอน
            ด้วยผลงานการสอนศิษย์ มากกว่า 3,000 คน ค่าครู เพียง 2,999 บาท
          </h1>
          <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
            ได้เรียนวิชาการดูดวงไพ่ยิปซี แบบ CELTIC CROSS ขั้น แอดวานซ์
            นำไปประกอบอาชีพได้จริง ได้ตำราโหราศาสตร์ ไว้ทบทวน 1 เล่ม มูลค่า
            1,599 บาท
          </h1>
        </div>

        <div className="flex">
          <Image
            src={courseTL1}
            alt="history"
            className="w-[100px] md:w-[300px] my-[10px] md:my-[20px] mx-2"
          />
          <Image
            src={courseTL2}
            alt="history"
            className="w-[150px] md:w-[400px] my-[10px] md:my-[20px] mx-2"
          />
        </div>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
          สอนเขียนยันต์ร่ำรวย ขั้น แอดวานซ์ สอนทุกวันอาทิตย์ ค่าเรียนเพียง 3,999
          บาท เท่านั้น ถูกต้องตามหลักอักขระโบราณ เข้มขลัง งดงาม
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
          -สอนตั้งแต่ไม่มีพื้นฐานจนเป็น เขียนเป็นทุกคนแน่นอน
          -สอนเขียนอักขระขอมโบราณ ที่จำเป็นต้องมีในผืนยันต์ศักดิ์สิทธิ์
          -สอนเขียนยันต์ในรูปแบบต่างๆหลากหลาย มีตัวอย่างมากกว่า 3000 แบบ
          -ผลงานการสอน ศิษย์ในคอร์ส มากกว่า 1,000 คน -มีตำราโหราศาสตร์
          ให้อ่านศึกษาประกอบการเรียน 1 เล่ม มูลค่า 1,599 บาท
        </h1>
        <div className="flex">
          <Image
            src={courseN1}
            alt="history"
            className="md:w-[300px] w-[100px] my-[10px] md:my-[20px] mx-2"
          />
          <Image
            src={courseN2}
            alt="history"
            className="md:w-[300px] w-[100px] my-[10px] md:my-[20px] mx-2"
          />
        </div>
        <div>
          <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
            "เรียน วิชา ลงนะพระลักษณ์หน้าทอง กับอาจารย์หาริ เพชรลานน์"
          </h1>
          <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
            เปิดสอนแล้ว วันนี้..#เสริมเสน่ห์ #เมตตามหานิยม
          </h1>
          <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
            พิธีกรรมลงนะพระลักษณ์หน้าทอง เป็นพิธีกรรมเสน่ห์สายขาว คนรัก คนชอบ
            ผู้ใหญ่ให้ความเอ็นดู อุปถัมภ์ ช่วยเหลือ เจริญก้าวหน้าในหน้าที่การงาน
          </h1>
          <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
            พิเศษ ค่าครู เพียง 2,999 บาทเท่านั้น
          </h1>
        </div>

        <div className="flex">
          <Image
            src={courseHJ1}
            alt="history"
            className="md:w-[400px] w-[130px] my-[10px] md:my-[20px] mx-2"
          />
          <Image
            src={courseHJ2}
            alt="history"
            className="md:w-[400px] w-[130px] my-[10px] md:my-[20px] mx-2"
          />
        </div>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
          วิชาฮวงจุ้ย ขั้น แอดวานซ์ ศาสตร์ ดาว 9 ยุค ถูกต้องตามหลัก
          วิชาฮวงจุ้ยโบราณค่าครูพิเศษเพียง 4,999 บาท เท่านั้น
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start">
          สอนตั้งแต่ไม่มีพื้นฐานจนเป็น จัดฮวงจุ้ยบ้านหรือสำนักงาน ที่ดิน
          เป็นทุกคนแน่นอน มีตำราโหราศาสตร์ 1 เล่ม ให้ใช้ประกอบการเรียน
          ทำให้เข้าใจ ได้ง่ายขึ้น มูลค่า 1,599 บาท
        </h1>
      </div>
    </div>
  );
}
