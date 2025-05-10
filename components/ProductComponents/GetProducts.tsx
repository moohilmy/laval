import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
export default function GetProducts() {
  return (
    <section className={`${styles.getProductSection} parallax-section`}>
      <div className={styles.getProductContant}>
        <Image 
          src="/loofah.png"
          alt="Get Our Products"
          width={150}
          height={150}
        />
        <h1 className={`${styles.getProductHeader} header-section`}>Get Our Products</h1>
        <p className={`${styles.getProductText}`}>
          Experience the best with our premium products.
        </p>
        <button className={`${styles.getProductButton}   `}>
          Shop Now
        </button>
      </div>
    </section>
  );
}
