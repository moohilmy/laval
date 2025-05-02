'use client'

import Image from "next/image"
import logoSymbol from '@/public/logo-symbol.svg'
import styles from './styles.module.css'
import { motion } from "framer-motion";
export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image className={styles.logoImg} src={logoSymbol} priority={true} alt="logo-name" width={55} height={55}/>
      <motion.p
      initial={{opacity: 0 , x: -40}}
      whileInView={{opacity: 1, x: 0}}
      transition={{
        opacity: { duration: .5, delay: .2 , ease: "linear" },
        x: {duration: 1, delay: 0 , ease: "linear" }
      }}
      viewport={{once: true}}
      className={styles.logoText}
      >laval</motion.p>
    </div>
  )
}
