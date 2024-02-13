import React, { FC } from 'react'
import { ILayoutProps } from './Layout.props'
import Header from '../Header/Header'
import Sidebar from '../Siderbar/Sidebar'
import Footer from '../Footer/Footer'

const Layout: FC<ILayoutProps> = ({children}): JSX.Element => {
  return (
    <>
    <Header />
    <div>
        <Sidebar  />
        <div>
            {children}
        </div>

    </div>
    <Footer />
    </>
  )
}

export default Layout;

