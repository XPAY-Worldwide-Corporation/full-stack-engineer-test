import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">Web Store</header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">© 2024</footer>
    </div>
  );
};

export default Layout;
