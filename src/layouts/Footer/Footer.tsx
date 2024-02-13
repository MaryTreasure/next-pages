import React, { FC } from 'react'
import { IFooterProps } from './Footer.props'
import styles from './Footer.module.scss'
import clsx from 'clsx';
import {format} from 'date-fns';
import Link from 'next/link';


const Footer: FC<IFooterProps> = ({className, ...props}) => {
  return (
    <footer {...props} className={clsx(className, styles.Footer)}>
      <p>OwlTop © {format(new Date(), 'yyyy')} Все права защищены</p>
      <Link className={styles.Footer__link} href={"/"} target='_blank'>Пользовательское соглашение</Link>
      <Link className={styles.Footer__link} href={"/"} target='_blank'>Политика конфиденциальности</Link>
    </footer>
  )
}

export default Footer