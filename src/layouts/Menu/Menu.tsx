import { useAppContext } from '@/AppContext'
import { IFirstLevelMenuItem, ITopLevelCategory } from '@/types';
import React from 'react';
import CoursesIcon from '@/Assets/icons/CoursesIcon.svg'
import ServisesIcon from '@/Assets/icons/ServisesIcon.svg'
import ProductsIcon from '@/Assets/icons/ProductsIcon.svg'
import ВooksIcon from '@/Assets/icons/BookIcon.svg'

const Menu = () => {
    const {menu,firstCategory,setMenu} = useAppContext();


    const firstLevelMenu :IFirstLevelMenuItem[] = [
        {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: ITopLevelCategory.COURSES},
        {route: 'servises', name: 'Сервисы', icon: <ServisesIcon/>, id: ITopLevelCategory.SERVICES},
        {route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: ITopLevelCategory.PRODUCTS},
        {route: 'books', name: 'Книги', icon: <ВooksIcon/>, id: ITopLevelCategory.BOOKS},
    ]
    
  return (
    <div>
        <CoursesIcon />
        <ServisesIcon />
        <ProductsIcon />
        <ВooksIcon />
        {menu.map((el) => (
            <li key={el._id.secondCategory}>{el._id.secondCategory}</li>
        ))}

    </div>
  )
}

export default Menu