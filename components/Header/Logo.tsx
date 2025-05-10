'use client'

import Image from "next/image"
import styles from './styles.module.css'
import logoImg from '@/public/logo-symbol.png'
import { motion } from "framer-motion";
export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image priority={true}  className={styles.logoImg} src={logoImg} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  alt="logo-name" width={45} height={45}/>
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
