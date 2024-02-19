import React, { FC } from "react";
import styles from "./MenuSecondLevel.module.scss";
import clsx from "clsx";
import MenuThirdLevel from "../MenuThirdLevel/MenuThirdLevel";
import { IMenuSecondLevelProps } from "./MenuSecondLevel.types";
import { useRouter } from "next/router";

const MenuSecondLevel: FC<IMenuSecondLevelProps> = ({ menu, route, openSecondLevel }) => {
  const router = useRouter();

  const usedPath = router.asPath.split("/")[2];

  return (
    <div className={styles.MenuSecondLevel}>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(usedPath)) {
          m.isOpened = true;
        }
        return (
          <div key={m._id.secondCategory}>
            <div onClick={() => openSecondLevel(m._id.secondCategory)} className={styles.MenuSecondLevel__item}>
              {m._id.secondCategory}
            </div>
            <div
              className={clsx(
                styles.MenuSecondLevel__subitem,
                m.isOpened && styles["MenuSecondLevel__subitem--open"]
              )}
            >
              <MenuThirdLevel pages={m.pages} route={route} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuSecondLevel;
