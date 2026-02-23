import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useState } from 'react'
import Navbar from './components/layout/Navbar';
import WhatsAppButton from './components/ui/WhatsAppButton';

import Home from "./screens/Home"
import Products from "./screens/Products"
import Contact from "./screens/Contact"

function App() {
  return(
    <BrowserRouter>
      <Navbar brand="DevMarket"/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <WhatsAppButton/>


    </BrowserRouter>
  );
}

export default App;