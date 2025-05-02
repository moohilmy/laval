"use client";
import { useRef, useEffect } from "react";
import styles from "./style.module.css";
import { animate, createScope, onScroll } from "animejs";
import Image from "next/image";
import openBagSrc from "@/public/open-bag.png";
import {motion} from 'framer-motion'
type AnimeScope = {
  add: (callback: () => void) => void;
};

export default function ProductImage() {
  const root = useRef(null);
  const scope = useRef<AnimeScope | null>(null);

  useEffect(() => {
    if (!root.current) return;

    scope.current = createScope({ root }).add(() => {
      const scrollConfig = {
        container: ".product-image-container",
        target: ".open-bag-anime",
        sync: 1,
        enter: "80% -25%",
        leave: "55% 35%",
        debug: true
      };

      animate(".open-bag-anime", {
        y: [-630, -400],
        autoplay: onScroll(scrollConfig),
        easing: "linear",
      });
    });
  }, []);

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    viewport={{once: true}}
    >
      <div
        ref={root}
        className={`product-image-container ${styles.openBagImgContainer}`}
      >
        <div className={`${styles.openBagImg} open-bag-anime`}>
          <Image
            fill
            src={openBagSrc}
            alt="open-bag"
            priority={true}
            style={{
              objectFit: "contain",
              transform: "scaleY(-1)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
