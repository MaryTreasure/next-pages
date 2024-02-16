import React from 'react'
import styles from './Sidebar.module.scss'
import { ISidebarProps } from './Sidebar.props'
import Menu from '../Menu/Menu'

const Sidebar = ({...props}: ISidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>

  )
}

export default Sidebar