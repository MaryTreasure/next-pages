import { AppContext, useAppContext } from "@/AppContext";
import { IFirstLevelMenuItem, ITopLevelCategory } from "@/types";
import React, { useContext } from "react";
import CoursesIcon from "@/Assets/icons/CoursesIcon.svg";
import ServisesIcon from "@/Assets/icons/ServisesIcon.svg";
import ProductsIcon from "@/Assets/icons/ProductsIcon.svg";
import ВooksIcon from "@/Assets/icons/BookIcon.svg";
import MenuFirstLevel from "@/components/MenuFirstLevel/MenuFirstLevel";

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

  const firstLevelMenu: IFirstLevelMenuItem[] = [
    {
      route: "courses",
      name: "Курсы",
      icon: <CoursesIcon />,
      id: ITopLevelCategory.COURSES,
    },
    {
      route: "servises",
      name: "Сервисы",
      icon: <ServisesIcon />,
      id: ITopLevelCategory.SERVICES,
    },
    {
      route: "products",
      name: "Продукты",
      icon: <ProductsIcon />,
      id: ITopLevelCategory.PRODUCTS,
    },
    {
      route: "books",
      name: "Книги",
      icon: <ВooksIcon />,
      id: ITopLevelCategory.BOOKS,
    },
  ];

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
