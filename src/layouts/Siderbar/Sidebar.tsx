import React from 'react'
import styles from './Sidebar.module.scss'
import { ISidebarProps } from './Sidebar.props'

const Sidebar = ({...props}: ISidebarProps): JSX.Element => {
  return (
    <div {...props}>Sidebar</div>
  )
}

export default Sidebar