import React, { useEffect, useState } from "react";
import logo from "../image/fvrt.jpg";
import { Blurhash } from "react-blurhash";

const Logo = () => {
  const [imageLoader, setImageLoader] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoader(true);
    };
    img.src = logo;
  }, []);

  return (
    <div className=" flex gap-2 items-center">
      <div className={`${imageLoader ? " hidden" : " inline"} `}>
        <Blurhash
          hash="L9F}_]rr7J4nYjM{DiIT4:S1~C%1"
          width={50}
          height={50}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        className={` w-16 h-16 object-cover rounded-full border-gray-500 border-4 ${
          imageLoader ? " inline" : " hidden"
        }`}
        src={logo}
        alt="Logo"
        loading="lazy"
      />
      <h1 className=" font-bold text-gray-500 dark:text-gray-200 text-xl lg:text-4xl">
        Aizy
      </h1>
    </div>
  );
};

export default Logo;
