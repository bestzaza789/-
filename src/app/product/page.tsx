"use client";
import React from "react";
import ProductCard from "./productCard";

interface Product {
  id: number;
  imageUrl: string;
  productName: string;
  price: number;
}

export default function Product() {
  const products = [
    {
      id: 1,
      created_at: "2024-03-20 12:21:12.441487+00",
      productName: "ปากกาเงินล้าน\nตะบองท้าวเวสสุวรรณ",
      price: 789,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1jEiGH4uadDWjer1O8IGrC3mkKfe-UoRY",
    },
    {
      id: 2,
      created_at: "2024-03-20 12:21:30.42804+00",
      productName: "ไม้ครู\nเพื่อประกอบพิธีกรรม\n",
      price: 299,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1FVNUGwgExdQgakjI7Q1kFpQ2c7OH69iv",
    },
    {
      id: 3,
      created_at: "2024-03-20 12:21:42.745522+00",
      productName: "เสื้อคาบดาบ สำหรับ แก้ฮวงจุ้ย",
      price: 299,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1rtuisxIMshVZVDAAekAiGSmfXoS0o8Ag",
    },
    {
      id: 13,
      created_at: "2024-03-20 12:21:42.745522+00",
      productName: "ยันต์อรหันต์คุ้มกายา",
      price: 199,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1DUYC7OaXn9-3oKVeZliCciNyKLcKeF94",
    },
    {
      id: 14,
      created_at: "2024-03-20 12:21:42.745522+00",
      productName:
        "กรอบป้ายภาษีรถยนต์ตำหนักเซียน แถมฟรี ยันต์อรหันต์คุ้มกายา มูลค่า 199 บาท",
      price: 499,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1oPQdY7_s6lfg_AUBuB0v7MWHhSJtAmlx",
    },
    {
      id: 15,
      created_at: "2024-03-20 12:21:42.745522+00",
      productName:
        "พัดซินแส ตำหนักเซียน แถมฟรี ยันต์อรหันต์คุ้มกายา มูลค่า 199 บาท",
      price: 499,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1tBQq8rgRzmApdGJEPg3z7cSPluYMA8rf",
    },
    {
      id: 4,
      created_at: "2024-03-20 12:22:06.642073+00",
      productName: "สบู่ นะหน้าทอง\nเมตตามหานิยม\n",
      price: 199,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1-PZsfdl5Q96Ye7yKmKc2BmKFm8khMy3U",
    },
    {
      id: 5,
      created_at: "2024-03-20 12:22:21.099988+00",
      productName: "พัดขงเบ้ง\nสำหรับซินแส\n",
      price: 499,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1uF-op60CgWcfsvDktuZnoZmmo-GwbM5-",
    },
    {
      id: 6,
      created_at: "2024-03-20 12:22:33.466064+00",
      productName: "ยันต์มหามงคลผ่านพิธี\nขนาด 30x30 เซนติเมตร\n",
      price: 3599,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1NgPJtyxXSIN74hfM9PkctF3bMUpAxAXe",
    },
    {
      id: 7,
      created_at: "2024-03-20 12:22:47.785476+00",
      productName: "ยันต์มหามงคลผ่านพิธี\nขนาด 50x50 เซนติเมตร\n",
      price: 7899,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1Pc-LakVzB6Y9zZJV1dkHuJL5yqJitHtr",
    },
    {
      id: 8,
      created_at: "2024-03-20 12:23:02.913502+00",
      productName:
        'กระเป๋าบารมีครู 5 สี\nแถมคอร์สเรียนบริหารชีวิต "ศิษย์มีครู"\n',
      price: 999,
      imageUrl:
        "https://lh3.googleusercontent.com/d/12jLk3tAdeMwXccSlycsao6oOjciRHXx7",
    },
    {
      id: 9,
      created_at: "2024-03-20 12:23:23.978882+00",
      productName:
        'กระเป๋าบารมีครู 5 สี \nแถมคอร์สเรียนบริหารชีวิต "ศิษย์มีครู"\n',
      price: 999,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1MOxpkh7W-50eThRN-ffwT1K4uSC7Jqnk",
    },
    {
      id: 10,
      created_at: "2024-03-20 12:23:36.627178+00",
      productName: "ตำราโหราศาสตร์\nฮวงจุ้ย เขียนยันต์ ดูดวง\n",
      price: 1599,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1jIO_H3NMx-14X6SAlVrVIzxtjmucPp-m",
    },
    {
      id: 11,
      created_at: "2024-03-20 12:23:49.157265+00",
      productName: "ตำราดูธาตุเกิด\nศาสตร์ดาว 9 ยุค\n",
      price: 999,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1Q9xC0IKOnpmmjNPirPCE4Bew_fcrYNpg",
    },
    {
      id: 12,
      created_at: "2024-03-20 12:24:11.215243+00",
      productName: "เบอร์มังกร 789",
      price: 89999,
      imageUrl:
        "https://lh3.googleusercontent.com/d/1wObnXzL1zDxIW9q-ShsPL7ir3hRWBjhK",
    },
    //https://lh3.googleusercontent.com/d/1tBQq8rgRzmApdGJEPg3z7cSPluYMA8rf
  ];
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="flex flex-wrap justify-center gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
