import {  useAppContext } from "@/AppContext";
import React from "react";

import MenuFirstLevel from "@/components/MenuFirstLevel/MenuFirstLevel";
import { firstLevelMenu } from "@/utils/firstLevelMenu";

const Menu = () => {
  const { menu, firstCategory, setMenu } = useAppContext();

  const openSecondLevel = (secondCategory: string) => {
    setMenu(menu.map(m => {
      if (m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }))
  }

 

  return (
    <div>
      {
        <MenuFirstLevel
          firstLevelMenu={firstLevelMenu}
          menu={menu}
          firstCategory={firstCategory}
          openSecondLevel={openSecondLevel}
        />
      }
    </div>
  );
};

export default Menu;
