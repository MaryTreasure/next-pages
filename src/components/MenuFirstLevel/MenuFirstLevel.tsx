import { IFirstLevelMenuItem } from "@/types";
import Link from "next/link";
import React, { FC } from "react";
import clsx from "clsx";
import styles from "./MenuFirstLevel.module.scss";
import MenuSecondLevel from "../MenuSecondLevel/MenuSecondLevel";
import { IMenuFirstLevelProps } from "./MenuFirstLevel.types";

const MenuFirstLevel: FC<IMenuFirstLevelProps> = ({
  firstLevelMenu,
  menu: outerMenu,
  firstCategory,
  className,
  openSecondLevel,
  ...other
}) => {
  return (
    <>
      {firstLevelMenu.map((menu: IFirstLevelMenuItem) => (
        <div key={menu.id}>
          <Link href={`/${menu.route}`}>
            <div
              {...other}
              className={clsx(
                className,
                styles.MenuFirstLevel,
                menu.id === firstCategory && styles[`MenuFirstLevel--active`]
              )}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          </Link>
          {menu.id === firstCategory && <MenuSecondLevel openSecondLevel={openSecondLevel} menu={outerMenu} route={menu.route}/>}
        </div>
      ))}
    </>
  );
};

export default MenuFirstLevel;
