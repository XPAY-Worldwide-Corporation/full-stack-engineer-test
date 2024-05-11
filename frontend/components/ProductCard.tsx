import Image from "next/image";
import React from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border p-4">
      <Image
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg">{product.name}</h3>
      <p>${product.price}</p>
      <a href={`/product/${product.id}`} className="text-blue-500">
        View
      </a>
    </div>
  );
};

export default ProductCard;
