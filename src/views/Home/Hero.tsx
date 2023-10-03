import React from "react";

function Hero() {
  return (
    <div>
      <div className="container w-full py-16 px-28 mt-20">
        <div className="flex flex-col gap-7">
          <div className="w-full flex justify-center">
            <h1 className="text-6xl font-medium leading-[70px] text-center w-10/12 text-head">
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
