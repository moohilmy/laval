import React from "react";
import { ProductsList } from "./data";
import Image from "next/image";
import styles from './style.module.css'
import Link from "next/link";
export default function GetProducts() {
  return (
    <section className={styles.getProductSection}>
      <ul className={styles.getproductList}>
        {ProductsList.map(({image,title,link},index) => (
          <li className={styles.getproductItem} key={index}>
            <div className='gradient-background'/>
            <div className={styles.getproductItemImage}>
              <Image src={image} alt={title} width={650} height={650} style={{
                height: '100%',
                objectFit: 'cover',
                width: '100%'
              }}/> 
            </div>
            <div className={styles.getproductItemdetails}>
              <h2 className={styles.getproductItemTitle}>{title}</h2>
                <div className={styles.getproductBtn}><Link className={styles.getproduct} href={link}>buy now</Link></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
