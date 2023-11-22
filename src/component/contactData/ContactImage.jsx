import React, { useEffect, useState } from "react";

import contactWebp from "../../image/contact.webp";
import contactMin from "../../image/contact-min.jpg";
import { Link } from "react-router-dom";
import HomeIcons from "../HomeIcons";
import { Blurhash } from "react-blurhash";

const ContactImage = () => {
  const [imageLoader, setImageLoader] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoader(true);
    };
    img.src = contactWebp || contactMin;
  }, []);

  return (
    <div className=" w-full lg:w-[35%] text-lg flex flex-col gap-4 p-8 rounded-xl group dark:shadow-shadowOne shadow-shadowTwo overflow-hidden">
      <div className={`${imageLoader ? " hidden" : " inline"}`}>
        <Blurhash
          hash="LGGHl75S+]R6NK}?xta00h=w-TkV"
          width={400}
          height={300}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>

      <picture>
        <source srcSet={contactWebp} type="image/webp" />
        <source srcSet={contactMin} type="image/jpg" />
        <img
          loading="lazy"
          className={` ${
            imageLoader ? " inline" : "hidden"
          } w-full rounded-xl  mb-6 group-hover:scale-110 duration-300`}
          src={contactMin}
          alt="Contact"
        />
      </picture>

      <h3 className=" text-4xl font-bold text-gray-500 dark:text-white capitalize">
        Azaz ali
      </h3>
      <p>Full stack developer</p>
      <p>
        'No Stack to Full stack'. Full stack development with technlogoies and
        languages are React js for frontend and Firebase for backend.
      </p>
      <div className=" flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <p className=" capitalize text-xl">phone :</p>
        <Link
          className=" text-gray-500 dark:text-lightText"
          to={"tel:+923163516009"}
        >
          +923163516009
        </Link>
      </div>
      <div className=" flex flex-col sm:flex-row sm:items-center  sm:gap-2">
        <p className=" capitalize text-xl">Email:</p>
        <Link
          className=" text-gray-500 dark:text-lightText"
          to={"mailto:azazalideveloper@gmail.com"}
        >
          azazalideveloper@gmail.com
        </Link>
      </div>
      <HomeIcons />
    </div>
  );
};

export default ContactImage;
