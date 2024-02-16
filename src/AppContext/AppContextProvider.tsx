import React, { FC, PropsWithChildren, useState } from "react";
import { AppContext } from ".";
import { IAppContext } from "./app.context.types";
import { IMenuItem } from "@/types";

const AppContextProvider: FC<PropsWithChildren<IAppContext>> = ({
  firstCategory,
  menu,
  setMenu,
  children,
}) => {
    const [menuState, setMenuState] = useState<IMenuItem[]>(menu)
  return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu: setMenuState}}>
    {children}
    </AppContext.Provider>;
};

export default AppContextProvider;
