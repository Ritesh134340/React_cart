import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const HomePage = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  const bannerStyle = {
    width: "100%",
    margin: "auto",
  };
  const imageStyle = {
    width: "100%",

    marginTop: "10px",
  };

  return (
    <div>
      <div style={bannerStyle}>
        <img
          style={imageStyle}
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683"
        ></img>
      </div>
      <div className={styles.container}>
        {data &&
          data.map((ele) => (
            <Link
              key={ele.id}
              to={`products/${ele.id}`}
              className={styles.main}
            >
              <img className={styles.image} src={ele.image}></img>
              <p>{ele.category}</p>
              <h3>Price : {ele.price}</h3>
              <p>Titel : {ele.title}</p>
              <button className={styles.button}>Buy Now</button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
