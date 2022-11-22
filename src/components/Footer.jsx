import React from "react";
import {
  FaYoutube,
  FaInstagramSquare,
  FaPinterestSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>All Rights Reserved &copy; 2022 Masai School</p>
      </div>

      <div>
        <Link className={styles.faq} to="/faq">
          FAQ
        </Link>
      </div>
      <div className={styles.social}>
        <Link className={styles.faq} target="_blank" to="www.youtube.com">
          {" "}
          <FaYoutube />{" "}
        </Link>
        <FaInstagramSquare />
        <FaPinterestSquare />
        <FaFacebookSquare />
      </div>
    </div>
  );
};

export default Footer;
