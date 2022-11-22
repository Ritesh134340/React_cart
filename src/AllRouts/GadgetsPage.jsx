import React from 'react'
import {Link} from "react-router-dom"
import { useEffect,useState } from 'react';
import styles from "../styles/Jwellery.module.css"

const GadgetsPage = () => {
    const [gadgets,setgadgets]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
          setLoading(true)
        fetch("https://fakestoreapi.com/products/category/jewelery").then((res)=>{
            return res.json()
        }).then((res)=>{
            setLoading(false)
            setgadgets(res)
        })
    },[])
  return (
    <>
    
    <div className={styles.jwelleryMain}>
    { 
       loading &&  <h1 className={styles.loading}>Loading...</h1>
    }
        {
            gadgets && gadgets.map((ele)=>
            <div key={ele.id} className={styles.eachJwellery}> <img className={styles.jwellery} src={ele.image}></img>
                <h4>Title : {ele.title}</h4>
                <h3>Price : {ele.price}</h3>
                </div>)
        }
      
    
    </div>
   {
        !loading &&  <div > <Link className={styles.back}  to="/products">Go Back</Link></div>
   } 
    </>
  )
}

export default GadgetsPage
