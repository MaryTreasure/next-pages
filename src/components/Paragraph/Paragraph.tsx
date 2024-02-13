import React, { FC } from "react";
import styles from "./Paragraph.module.scss";
import { IParagraphProps } from "./Paragraph.Types";
import { clsx } from "clsx";

const Paragraph: FC<IParagraphProps> = ({ size= 14, children, className,  ...other}) => {
  return (
    <p
    {...other}
      className={clsx(
        className,
        styles.Paragraph,
        size === "14" && styles["Paragraph--small"],
        size === "16" && styles["Paragraph--middle"],
        size === "18" && styles["Paragraph--big"]
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
