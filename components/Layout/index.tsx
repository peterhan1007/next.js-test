import React, { ReactNode, useEffect } from "react";

import Header from "./Header";
import Footer from "./footer";

interface ChildrenProps {
  children: ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
