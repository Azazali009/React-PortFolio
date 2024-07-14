import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const IntroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying((show) => !show);
  };
  return (
    <div className=" absolute bottom-0 left-[50%] min-w-full -translate-x-[50%] translate-y-[50%] rounded-2xl bg-gray-200 shadow-shadowTwo dark:bg-bodyColor dark:shadow-shadowOne md:min-w-[100%] xl:min-w-[80%]">
      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 p-4 sm:p-8 md:grid-cols-2 md:gap-y-0">
        <div
          className="relative cursor-pointer overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handlePlay}
        >
          <div
            className={`absolute inset-0 hidden cursor-pointer items-center justify-center sm:flex ${
              isPlaying
                ? isHovered
                  ? "bg-black bg-opacity-20"
                  : "bg-transparent"
                : "bg-black bg-opacity-20"
            }`}
          >
            {!isPlaying ? (
              <FaPlay
                onClick={() => videoRef.current.play()}
                size={50}
                className="text-white"
              />
            ) : (
              isHovered && (
                <FaPause
                  onClick={() => videoRef.current.pause()}
                  size={50}
                  className="text-white"
                />
              )
            )}
          </div>
          <video
            ref={videoRef}
            poster="/data/poster.webp"
            controls
            className="h-full w-full bg-gray-300 "
            src="/data/intro-video.mp4"
          />
        </div>
        <div className=" space-y-4">
          <h2 className=" font-primary text-lg font-semibold tracking-wide text-designColor sm:text-xl ">
            Meet Azaz Ali: Expert Developer in <br /> Modern Web Technologies
          </h2>
          <p className=" w-full text-base leading-7 sm:leading-8">
            Hi, I'm Azaz Ali, a passionate and skilled developer specializing in
            modern web technologies. With a strong foundation in React JS, Next
            JS, Node JS, and Supabase, I am dedicated to creating
            high-performance, scalable, and user-friendly web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
