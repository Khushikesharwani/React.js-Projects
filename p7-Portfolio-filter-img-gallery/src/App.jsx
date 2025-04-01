import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Menu from './Components/Menu'
import Categories from './Components/Categories'
import items from './Components/data';

const allCategories =['all', ...new Set(items.map((item)=>item.category))]


const App = ()=>{
  const [menuItem,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)

  const filterItem = (category)=>{
    if(category === 'all'){
      setMenuItems(items)
      return;
    }

  const newItem= items.filter((item)=>item.category==category);
  setMenuItems(newItem)
}

  return (
    <>
    <div className='menu section'>
      <div className='title'>
        <h2>Our Filter Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories = {categories} filterItem={filterItem} />
      <Menu items = {menuItem}  />

    </div>
    
    </>
  )
}

export default App
