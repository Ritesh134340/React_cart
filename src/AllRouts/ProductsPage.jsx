import React from 'react'
import styles from "../styles/Products.module.css"
import {Link} from "react-router-dom"

const ProductsPage = () => {
  return (
   
    <div  className={styles.main}>
        <Link className={styles.link} to="/products/gadgets">Explore Gadgets
      <div>
      <img  className={styles.img} src="https://images.unsplash.com/photo-1594731804139-d70328c07f4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhZGdldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img>
    

      </div></Link>
      <Link className={styles.link} to="/products/cloth">Explore Clothing
      <div>
       <img className={styles.img} src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img>
       
      </div></Link>
      <Link className={styles.link} to="/products/jwellery">Explore Jwellery
      <div>
        <img className={styles.img} src="https://media.istockphoto.com/photos/maasai-hand-crafted-jwellery-and-ethnic-decoration-picture-id1298962973?b=1&k=20&m=1298962973&s=170667a&w=0&h=KN6BGSimakvnThV7NHdPVBPO1iL0FMYs7stxip_O2JM="  />
       
      </div></Link>
    </div>
   
  )
}

export default ProductsPage
