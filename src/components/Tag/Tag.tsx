import React, { FC } from "react";
import styles from "./Tag.module.scss";

import { clsx } from "clsx";
import { ITagProps } from "./TagTypes";

const Tag: FC<ITagProps> = ({ size= 'sm', children, color= 'ghost', href, className,  ...other}) => {
  return (
    <div
    {...other}
      className={clsx(
        className,
        styles.Tag,
        size === "sm" && styles["Tag--sm"],
        size === "md" && styles["Tag--md"],
        color === "ghost" && styles["Tag--ghost"],
        color === "red" && styles["Tag--red"],
        color === "grey" && styles["Tag--grey"],
        color === "green" && styles["Tag--green"],
        color === "primary" && styles["Tag--primary"],

      )}
    >
      {href? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
