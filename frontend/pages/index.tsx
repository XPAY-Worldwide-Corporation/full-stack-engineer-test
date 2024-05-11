import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}`
      );
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
