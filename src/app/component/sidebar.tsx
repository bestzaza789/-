"use client";

export default function Sidebar() {
  return (
    <div className="sidebar ">
      <div className=" mx-auto ">
        <aside className="w-64" aria-label="Sidebar">
          <div className=" px-3 py-4 rounded bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-5 flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">
                    ประวัติ ตำหนักเซียน 12 องค์เทพ
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">กิจกรรมและข่าวสาร</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">วัตถุมงคล</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">Products</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">คอร์สสอนวิชาโหราศาสตร์</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">
                    ติดต่อ ดูดวงไพ่ ลงนะหน้าทอง ทั่วประเทศ
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">
                    ติดต่อ จัดฮวงจุ้ยมังกร ทั่วประเทศ
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">
                    ติดต่องาน พิธีกรรมทั่วประเทศ
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">สมัครเป็นศิษย์ก้นกุฏิ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 ">ติดต่อสอบถาม</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
