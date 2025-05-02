import React from 'react'
import Link from "next/link";
import styles from './styles.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
          <div className={styles.copyrightText}>all copyrights by laval ©</div>
          <div className={styles.Devlink}>dev by hilmy dev <Link href={'https://www.linkedin.com/in/mohamed-helmy-92a70b245/'} className={'link'}/></div>
        </footer>
  )
}
