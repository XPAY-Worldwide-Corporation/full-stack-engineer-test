import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/${id}`
        );
        const data = await response.json();
        setProduct(data);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Layout>
      <div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        {/* Add to Cart Button */}
      </div>
    </Layout>
  );
};

export default ProductDetail;
