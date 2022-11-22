import React from 'react'
import {NavLink} from "react-router-dom";
import styles from "../styles/Navbar.module.css"
import {Link} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const links=[
 
  {
    to:"/products",
    title:"Products"
  },
  {
    to:"/contact",
    title:"Contact Us"
  },
  {
    to:"/about",
    title:"About Us"
  }
]

const Navbar = () => {

  const activeStyle={
    color:"red",
    textDecoration:"none",
    padding:"1rem",
    fornWeight:"700"
  }
  const defaultStyle={
    color:"black",
    textDecoration:"none",
    padding:"1rem",
    fornWeight:"700"
  }
  return (
    <div className={styles.main}>
    <div className={styles.shop}><NavLink style={({isActive})=>(isActive ? activeStyle :defaultStyle)} to="/">SHOP</NavLink></div>
    <div className={styles.child} >
      {
        links.map((ele)=><NavLink style={({isActive})=>(isActive ? activeStyle :defaultStyle)} to={ele.to}>{ele.title}</NavLink>)
      }
    </div>
    <Link to="/shoppingcart" >< FaShoppingCart/></Link><span className={styles.count}>1</span>
    </div>
  )
}

export default Navbar
