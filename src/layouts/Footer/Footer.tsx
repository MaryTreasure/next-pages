import React, { FC } from 'react'
import { IFooterProps } from './Footer.props'

const Footer: FC<IFooterProps> = ({...props}) => {
  return (
    <div {...props}>Footer</div>
  )
}

export default Footer