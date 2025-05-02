
import styles from "./style.module.css";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <section className={styles.productDetails}>
      <div className={styles.productCardDetails}>
        <div className={styles.productContent}>
            <h1 className={styles.productDetailsHeader}>Egyption loofeh</h1>
            <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis voluptates odit consequuntur molestiae enim similique ipsum. Laboriosam animi, quidem et repellendus, labore excepturi temporibus reiciendis corporis voluptatibus quas omnis a.</p>
        </div>
        <div className={styles.productContentImg}>
            <Image  src={'/ads.jpg'} alt="ads" width={750} height={750} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        </div>
      </div>
    </section>
  )
}
