import React from "react";
import Header from "./Navbar/index";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  };
    
  export default Layout;