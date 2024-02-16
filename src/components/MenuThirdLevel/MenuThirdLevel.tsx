import React, { FC } from 'react'
import { IMenuThirdLevelProps } from './MenuThirdLevel.types'
import Link from 'next/link';
import styles from './MenuThirdLevel.module.scss'
import clsx from 'clsx';

const MenuThirdLevel: FC<IMenuThirdLevelProps> = ({pages, route}) => {
  return (
    <>
    {pages.map(p => (
      <Link key={`/${route}/${p.alias}`} href={`/${route}/${p.alias}`} className={clsx(styles.MenuThirdLevel, true && styles['MenuThirdLevel--active'])}>
        {p.category}
      </Link>
    ))}
    </>
  )
}

export default MenuThirdLevel