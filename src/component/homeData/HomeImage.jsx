import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import imageWebp from "../../image/azaz.webp";
import imageMin from "../../image/azaz-min.png";
import { Blurhash } from "react-blurhash";

const parentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const imageBackVariant = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
    },
  },
};
const HomeImage = () => {
  const [imageLoader, setImageLoader] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoader(true);
    };
    img.src = imageWebp || imageMin;
  }, []);
  return (
    <motion.div
      className=" relative "
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      <div className={`${imageLoader ? " hidden" : " inline"}`}>
        <Blurhash
          hash="LMGlI-Rj0gWV_NoJXnoz9tt7-9M{"
          width={300}
          height={300}
          resolutionX={50}
          resolutionY={50}
          punch={1}
        />
      </div>

      <div className={`${imageLoader ? " inline" : "  hidden "}`}>
        <picture>
          <source srcSet={imageWebp} type="image/webp" />
          <source srcSet={imageMin} type="image/png" />
          <motion.img
            loading="lazy"
            className=" lg:-mt-40 w-[260px] h-[400px] lg:w-[370px] lg:h-[680px] xl:w-[450px] xl:h-[800px] relative z-10"
            src={imageMin}
            alt="Hero image"
            variants={imageVariant}
          />
        </picture>
        <motion.div
          className="  absolute bottom-0 shadow-shadowTwo rounded-lg w-[260px] h-[300px] lg:w-[370px] xl:w-[450px] lg:h-[500px] xl:h-[550px] dark:bg-gradient-to-r from-[#1e2024] to-[#202327] dark:shadow-shadowOne"
          variants={imageBackVariant}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default HomeImage;
