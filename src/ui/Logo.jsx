import React from "react";
import logo from "../image/dark-logo.png";
import { Link } from "react-router-dom";

// import { Blurhash } from "react-blurhash";

const Logo = () => {
  // const [imageLoader, setImageLoader] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     setImageLoader(true);
  //   };
  //   img.src = logo;
  // }, []);

  return (
    <Link to={"/"} className=" flex w-36 items-center gap-2 sm:w-40">
      {/* <div className={`${imageLoader ? " hidden" : " inline"} `}>
        <Blurhash
          hash="L9F}_]rr7J4nYjM{DiIT4:S1~C%1"
          width={50}
          height={50}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div> */}
      <img className={` w-full `} src={logo} alt="Logo" loading="lazy" />
      {/* <h1 className=" text-xl font-bold text-gray-500 dark:text-gray-200 lg:text-4xl">
        Aizy
      </h1> */}
    </Link>
  );
};

export default Logo;
