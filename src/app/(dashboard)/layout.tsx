import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h6>Dashboard Layout</h6>
      {children}
    </>
  );
};

export default Layout;
