import React, { FC } from "react";
import { ILayoutProps } from "./Layout.props";
import Header from "../Header/Header";
import Sidebar from "../Siderbar/Sidebar";
import Footer from "../Footer/Footer";
import styles from './Layout.module.scss'

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.Layout}>
      <Header className={styles.Layout__header}/>

      <Sidebar className={styles.Layout__sidebar}/>
      <div className={styles.Layout__body}>{children}</div>

      <Footer className={styles.Layout__footer}/>
    </div>
  );
};

export default Layout;
