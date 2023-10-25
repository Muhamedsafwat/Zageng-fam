import React from "react";

import heroPg from "../../assets/hero-bg1.jpg";

const Hero = () => {
  return (
    <section className="relative lg:h-screen overflow-hidden flex items-center justify-center p-10 pt-20">
      <img
        src={heroPg}
        alt="hero section bg img"
        className="object-cover absolute z-0 w-full h-full"
      />
      <div className="absolute w-full h-full top-0 bg-black bg-opacity-30 z-10" />
      <div className="z-20 text-center w-full max-w-4xl text-white text-3xl lg:text-4xl font-normal bg-white bg-opacity-20 backdrop-blur-sm h-fit p-14 mt-14 rounded-lg">
        <p className="mb-5">
          Care about the{" "}
          <span className="font-bold italic tracking-widest">PRESENT</span>
        </p>
        <p>
          Build the{" "}
          <span className="font-bold italic tracking-widest">FUTURE</span>
        </p>
        <p className="text-base mt-7">We’ve been here since 2007</p>
        <p className="text-base lg:text-lg tracking-wider opacity-60 mt-7 ">
          Zageng Family is the oldest student activity in Zagazig university.
          Our goals is to help each other so we can make more connections and
          form a family, also we can improve both hard and soft skills.
        </p>
      </div>
    </section>
  );
};

export default Hero;
