import React, { createContext, useState } from "react";
export const NavSideBarContext = createContext(null);
const NavSideBarContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <NavSideBarContext.Provider value={{ open, setOpen }}>
      {children}
    </NavSideBarContext.Provider>
  );
};

export default NavSideBarContextProvider;
