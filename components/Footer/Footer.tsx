import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightText}>Copyright © 2025, LAVAL.</div>
      <div className={styles.Devlink}>
        dev by :
        <Link
          aria-label="link-dev"
          href={"https://www.linkedin.com/in/mohamed-helmy-92a70b245/"}
          className={"link"}
        />
        <span>helmy dev</span>
      </div>
    </footer>
  );
}
