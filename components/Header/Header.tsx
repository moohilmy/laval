import React from 'react'
import styles from './styles.module.css'
import Logo from './Logo'
import NavLinks from './NavLinks'

const links : string[] = ['product', 'Testimonial', 'Contact']
const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <Logo />
        <NavLinks links={links} />
    </header>
  )
}

export default Header
