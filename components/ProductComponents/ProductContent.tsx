"use client";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductContent() {
  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          opacity: { duration: 1, delay: .2, ease: "linear" },
        }}
        viewport={{amount: .8 , once: true}}
        className={`${styles.prouductHeader} header-section`}
      >
        our Product
      </motion.h2>
      <div className={styles.productList}>
          {
            [0].map((_,index = 1)=>(
              <motion.div
              initial={{opacity: 0, y: -200}}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                opacity: { duration: .5, delay: 1 * index, ease: "linear" },
                y: {duration: 1, delay: .1 * index, ease: "linear" }
              }}
              viewport={{amount: .2 , once: true}}
              key={index} className={`${styles.productItem}`}>
              <Image src={'/loofeh-mockup.png'} alt="product-image" height={500} width={500} style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain'
              }} />
            </motion.div>
            ))
          }
      </div>
    </div>
  );
}
