"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

interface NavLinksProps {
  links: string[];
}

export default function NavLinks({ links }: NavLinksProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navContainer}>
      <button
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={styles.menuBtn}
      >
        <Image
          src={isMenuOpen ? "/x.svg" : "/menu.svg"}
          alt="menu button"
          width={40}
          height={40}
        />
      </button>

      <ul className={`${styles.navList} ${isMenuOpen ? styles.navListActive : ""}`}>
        {links.map((link, i) => {
          const sectionId = link.toLowerCase();
          return (
            <motion.li
              key={sectionId}
              className={styles.navItem}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(sectionId);
              }}
            >
              {link}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
