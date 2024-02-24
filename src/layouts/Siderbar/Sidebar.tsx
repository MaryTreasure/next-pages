import React from 'react'
import styles from './Sidebar.module.scss'
import { ISidebarProps } from './Sidebar.props'
import Menu from '../Menu/Menu';
import Logo from '@/Assets/icons/Logo.svg';
import clsx from 'clsx';

const Sidebar = ({className, ...props}: ISidebarProps): JSX.Element => {
  return (
    <div className={clsx(className, styles.Sidebar)} {...props}>
      <Logo className={styles.Sidebar__logo}/>
      <div>поиск</div>
      <Menu />
    </div>

  )
}

export default Sidebar