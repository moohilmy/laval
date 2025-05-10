
import styles from "./style.module.css";
import Image from "next/image";


export default function ProductDetails() {
  return (
    <section className={`${styles.productDetails} wrapper-page`}>
      <div className={styles.productCardDetails}>
        <div className={styles.productContent}>
            <h1 className={styles.productDetailsHeader}>Egyption loofeh</h1>
            <p className={styles.productDescription}>Discover the secret of ancient Egyptian skincare with LAVAL – 100% natural loofah handpicked from the fertile lands of the Nile. Grown under the warm Egyptian sun and traditionally processed to preserve its strength and purity, our loofah is perfect for exfoliating, stimulating blood circulation, and leaving your skin glowing.</p>
        </div>
        <div className={styles.productContentImg}>
            <Image loading="lazy" src={'/ads.png'} alt="ads" width={600} height={600} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        </div>
      </div>
    </section>
  )
}
