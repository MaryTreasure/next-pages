import React, { FC } from "react";
import styles from "./MenuSecondLevel.module.scss";
import clsx from "clsx";
import MenuThirdLevel from "../MenuThirdLevel/MenuThirdLevel";
import { IMenuSecondLevelProps } from "./MenuSecondLevel.types";

const MenuSecondLevel: FC<IMenuSecondLevelProps> = ({ menu, route }) => {
  return (
    <div className={styles.MenuSecondLevel}>
      {menu.map((m) => (
        <div key={m._id.secondCategory}>
          <div className={styles.MenuSecondLevel__item}>
            {m._id.secondCategory}
          </div>
          <div className={clsx(styles['MenuSecondLevel__subitem'], m.isOpened && styles['MenuSecondLevel__subitem--open'])}>
            <MenuThirdLevel pages={m.pages} route={route}/>

          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSecondLevel;
