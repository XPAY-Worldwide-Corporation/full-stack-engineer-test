const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-700 h-full">
      <ul className="text-white p-4">
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/dashboard/products">Products</a>
        </li>
        <li>
          <a href="/dashboard/orders">Orders</a>
        </li>
        <li>
          <a href="/dashboard/account">Account</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
