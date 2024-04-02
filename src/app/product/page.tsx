"use client";
import React from "react";
import ProductCard from "./productCard";
import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

interface Product {
  id: number;
  imageUrl: string;
  productName: string;
  price: number;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase.from("product").select("*");
        console.log("supabase", supabase);
        console.log("data", data);
        if (error) {
          throw error;
        }
        if (data) {
          setProducts(data);
        }
      } catch (error: any) {
        console.error("Error fetching products:", error.message);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center  m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="flex flex-wrap justify-center gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
