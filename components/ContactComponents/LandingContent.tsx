'use client'
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export default function LandingContent() {
  return (
    <div className={styles.landingContentSection}>
      <motion.div
      initial={{opacity: 0 , x: 400}}
      whileInView={{opacity: 1, x: 0}}
       transition={{
          opacity: { duration: 1, delay: .2, ease: "linear" },
        }}
    viewport={{amount: .2 , once: true}}
      
      >
        <Image
          src={"/earth.png"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={400}
          height={400}
          alt="contact-us"
        />
      </motion.div>

    </div>
  );
}
