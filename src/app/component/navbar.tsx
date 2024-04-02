"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 0,
      link: "/",
      Name: "หน้าแรก",
    },
    {
      id: 1,
      link: "history",
      Name: "ประวัติ",
    },
    {
      id: 2,
      link: "news",
      Name: "กิจกรรม",
    },
    {
      id: 10,
      link: "reward",
      Name: "เกียรติรางวัล",
    },
    {
      id: 3,
      link: "course",
      Name: "คอร์สเรียนโหราศาสตร์",
    },
    {
      id: 4,
      link: "product",
      Name: "วัตถุมงคล",
    },
    {
      id: 5,
      link: "horoscope",
      Name: "ติดต่อดูดวง",
    },
    {
      id: 6,
      link: "fengshui",
      Name: "ติดต่อจัดฮวงจุ้ย",
    },
    {
      id: 7,
      link: "rite",
      Name: "ติดต่องานพิธีกรรม",
    },
    {
      id: 8,
      link: "applyMembership",
      Name: "สมัครเป็นศิษย์",
    },
    {
      id: 9,
      link: "contact",
      Name: "สอบถาม",
    },
  ];

  return (
    <div className=" sticky top-0 flex justify-between items-center w-full h-14 md:h-20 px-4 text-white bg-black z-50 ">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-xl md:text-3xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            "สายมูสร้างเงินล้าน"
          </Link>
        </h1>
      </div>

      <ul className="hidden ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute z-0 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, Name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-3 text-2xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
