import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-black text-white">{children}</main>
    </>
  );
};

export default Layout;
