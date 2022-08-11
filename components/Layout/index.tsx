import React, { ReactNode, useEffect } from "react";

import Header from "./Header";

interface ChildrenProps {
  children: ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
