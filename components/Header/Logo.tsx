'use client'

import Image from "next/image"
import styles from './styles.module.css'
import { motion } from "framer-motion";
export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image priority={true}  className={styles.logoImg} src={'/logo-symbol.png'}  alt="logo-name" width={45} height={45}/>
      <motion.p
      initial={{opacity: 0 , x: -40}}
      whileInView={{opacity: 1, x: 0}}
      transition={{

      }}
      viewport={{once: true}}
      className={styles.logoText}
      >laval</motion.p>
    </div>
  )
}
