import Slider from "react-slick";

function Residental() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/image.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
                  Residential care project in Paris
                </p>
              </div>
              <div className="pb-28 pr-96">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/image2.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
                  Residential care project in Paris
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/image3.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
                  Residential care project in Paris
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/image4.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
                  Residential care project in Paris
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/image.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
                  Residential care project in Paris
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/image2.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
                  Residential care project in Paris
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/image3.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
                  Residential care project in Paris
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/image4.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
                  Residential care project in Paris
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Residental;
