import React from "react";
import styles from "./style.module.css";

const TestimonialCard = () => {
  return (
    <div className={styles.TestamonialCard}>
      <div className={styles.TestimonialCardContent}>
        <h2 className={styles.TestamonialName}>tesla boy</h2>
        <p className={styles.TestamonialDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, cumque, voluptates, quibusdam quisquam voluptatibus
          cumque voluptates quibusdam quisquam voluptatibus cumque voluptates
          quibusdam.
        </p>
      </div>
      <div className={styles.TestimonialCardImage}>
        <div className={styles.TestimonialCardImageContainer}>

        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
