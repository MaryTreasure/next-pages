import React, { FC } from 'react'
import { IHeaderProps } from './Header.props'

const Header: FC<IHeaderProps> = ({...props}) => {
  return (
    <div {...props}>Header</div>
  )
}

export default Header