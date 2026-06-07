import React from 'react'
import { Routes, Route} from 'react-router-dom'
import ContactPage from './page/ContactPage'
import Product from './page/Product'
import ProductDetails from './page/ProductDetails'
import Home from './page/Home'
import About from './page/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/contact' element={<ContactPage/>}/>
<Route path='/product' element={<Product/>}/>
<Route path='/product/:id' element={<ProductDetails/>}/>
<Route path='about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
