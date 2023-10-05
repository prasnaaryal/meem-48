import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <div style={{ position: "relative" }}>
      <div className="container w-full py-16 sm:px-28 mt-20">
        <div className="flex flex-col gap-7">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl sm:text-6xl font-medium sm:leading-[70px] text-center w-full sm:w-10/12 text-head">
              Risk-Free Quality: Delivering Exceptional Projects
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-xl text-center text-subHead w-[800px]">
              Results That Inspire Trust: Structura Design Co.’s Commitment to
              Quality Projects and Impressive Housing for Customers’s
              Confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="container pl-36 sm:pl-0">
        <ScrollLink
          to={"contact"}
          smooth={true}
          duration={0}
          key={"Contact"}
          className="cursor-pointer"
        >
          <div className="absolute top-80 sm:top-72 animate-spin animation-delay-5s">
            <img src="/assets/images/getInTouch.svg" alt="Get in touch" />
          </div>
        </ScrollLink>
      </div>
      <div className="w-full h-[640px]">
        <img
          src="/assets/images/hero-image.png"
          alt="hero image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
