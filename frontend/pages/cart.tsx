import { useState, useEffect } from "react";
import Layout from "../components/Layout";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Fetch cart items from local storage or API
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const handleCheckout = () => {
    console.log("Proceed to checkout");
    // Implement checkout functionality
  };

  const addToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: CartItem) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <Layout>
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border-b"
            >
              <div>
                <h3 className="text-lg">{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div>Quantity: {item.quantity}</div>
            </div>
          ))}
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white p-2 mt-4"
          >
            Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Layout>
  );
};

export default Cart;
