import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import CartPage from "./CartPage";


const SingleProduct = () => {
  const params = useParams();
  const [singleData, setSingleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart,setCart]=useState([])
 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSingleData(res);
      });
  }, [params.id]);
 
  const handleAddCart = () => {
      setCart(...cart,singleData)
  };
      console.log(cart)
  return (
    <div>
    <div className={styles.single}>
      {
        <div key={singleData.id}>
          <img className={styles.image} src={singleData.image}></img>
          <h3>Category : {singleData.category}</h3>
          <p>Description : {singleData.description}</p>
          <h2>Price : {singleData.price}</h2>
        </div>
      }
      <button onClick={handleAddCart} className={styles.button}>
        Add To Cart
      </button>
   
    </div>
    <Link className={styles.back} to="/">Go Back</Link>
    </div>
  );
};

export default SingleProduct;
