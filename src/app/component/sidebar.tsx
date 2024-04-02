"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar hidden md:flex">
      <div className=" mx-auto ">
        <aside className="w-64" aria-label="Sidebar">
          <div className=" px-3 py-4 rounded bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-5 flex flex-col gap-4">
              <li>
                <Link
                  href="/history"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">
                    ประวัติ ตำหนักเซียน 12 องค์เทพ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">กิจกรรมและข่าวสาร</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/reward"
                  className=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">เกียรติรางวัล</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/course"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">คอร์สสอนวิชาโหราศาสตร์</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">วัตถุมงคล</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/horoscope"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">
                    ติดต่อ ดูดวงไพ่ ลงนะหน้าทอง ทั่วประเทศ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/fengshui"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">
                    ติดต่อ จัดฮวงจุ้ยมังกร ทั่วประเทศ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rite"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">
                    ติดต่องาน พิธีกรรมทั่วประเทศ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/applyMembership"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">สมัครเป็นศิษย์ก้นกุฏิ</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">ติดต่อสอบถาม</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
