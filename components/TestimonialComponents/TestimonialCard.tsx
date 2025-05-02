import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
const  TestimonialCard = () => {
  return (
    <div className={styles.TestimonialCard}>
      <div className={styles.TestimonialCardHero}>
        <Image
          height={60}
          width={60}
          alt={"person-name"}
          src={"/person.png"}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.TestimonialText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim
        officiis ipsa!
      </div>
      <div>
        <p className={styles.TestimonialName}>tesla boy</p>
      </div>
    </div>
  );
}

export default TestimonialCard