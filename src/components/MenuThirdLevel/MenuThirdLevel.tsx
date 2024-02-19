import React, { FC } from "react";
import { IMenuThirdLevelProps } from "./MenuThirdLevel.types";
import Link from "next/link";
import styles from "./MenuThirdLevel.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";

const MenuThirdLevel: FC<IMenuThirdLevelProps> = ({ pages, route }) => {

  const router = useRouter();

  const usedPath = router.asPath;
  return (
    <>
      {pages.map((p) => (
        <Link
          key={`/${route}/${p.alias}`}
          href={`/${route}/${p.alias}`}
          className={clsx(
            styles.MenuThirdLevel,
            `/${route}/${p.alias}` === usedPath && styles["MenuThirdLevel--active"]
          )}
        >
          {p.category}
        </Link>
      ))}
    </>
  );
};

export default MenuThirdLevel;
