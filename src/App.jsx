import React , {useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Item from './components/Item/Item'
import NFound from './components/NotFound/NFound'

import './App.css'

const App = () => {
  
  const navigation = useNavigate();
  
  return (
      <>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/item' element={<Item/>} />
            <Route path='*' element={<NFound/>} />
          </Routes>
        </div>
      </>
  )
}

export default App