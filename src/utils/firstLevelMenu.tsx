import CoursesIcon from "@/Assets/icons/CoursesIcon.svg";
import ServisesIcon from "@/Assets/icons/ServisesIcon.svg";
import ProductsIcon from "@/Assets/icons/ProductsIcon.svg";
import ВooksIcon from "@/Assets/icons/BookIcon.svg";
import { IFirstLevelMenuItem, ITopLevelCategory } from "@/types";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
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