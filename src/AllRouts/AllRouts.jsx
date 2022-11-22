import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './HomePage'
import ProductsPage from './ProductsPage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'
import FAQPage from './FAQPage'
import GadgetsPage from './GadgetsPage'
import JwelleryPage from './JwelleryPage'
import ClothingPage from './ClothingPage'
import SingleProduct from './SingleProduct'
import CartPage from './CartPage'

const AllRouts = () => {
  return (
   <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/products" element={<ProductsPage/>} />
     <Route path="/contact" element={<ContactPage/>} />
     <Route path="/about" element={<AboutPage/>} />
     <Route path="/faq" element={<FAQPage/>} />
     <Route path="/products/cloth" element={<ClothingPage/>} />
     <Route path="/products/jwellery" element={<JwelleryPage/>} />
     <Route path="/products/gadgets" element={<GadgetsPage/>} />
     <Route path="/products/:id" element={<SingleProduct/>} />
     <Route path="/shoppingcart" element={<CartPage/>} />
   </Routes>
   
  )
}

export default AllRouts
