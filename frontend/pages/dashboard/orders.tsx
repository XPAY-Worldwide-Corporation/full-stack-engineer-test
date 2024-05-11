import { useEffect, useState } from "react";

interface Order {
  id: string;
  customerName: string;
  total: number;
  status: string;
  items: { name: string; quantity: number; price: number }[];
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ORDER_API_URL}/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (response.ok) {
        // Refresh the list of orders or handle success
        console.log("Order status updated successfully");
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_ORDER_API_URL}`
        );
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">Manage Orders</h2>
      <div>
        {orders.map((order) => (
          <div key={order.id} className="p-4 border-b border-gray-200">
            <h3 className="text-lg">Order ID: {order.id}</h3>
            <p>Customer: {order.customerName}</p>
            <p>Total: ${order.total}</p>
            <p>Status: {order.status}</p>
            <button
              onClick={() => updateOrderStatus(order.id, "Completed")}
              className="bg-blue-500 text-white p-2"
            >
              Mark as Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
