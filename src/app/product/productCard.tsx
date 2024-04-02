// components/ProductCard.tsx

import React from "react";

interface Product {
  id: number;
  imageUrl: string;
  productName: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="md:h-96 w-full object-cover object-center md:object-fill"
        src={product.imageUrl}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {product.productName}
        </h2>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            {product.price.toFixed(2)} บาท
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
