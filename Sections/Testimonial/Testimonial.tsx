
import { TestimonialCard } from "@/components";
import React from "react";
import styles from './styles.module.css'
export default function Testimonial() {
  return (
    <section id="testimonial" className="wrapper-page">
      <div className={styles.TestimonialHeader}>
      <h1 className="header-section">Testimonial</h1>
      <span className={styles.testimonialsubHeader}>see what people are saying ?</span>
      </div>
    <div className={styles.TestimonialContent}>
      <TestimonialCard/>
    </div>
    </section>
  );
}
