import StyledHeader from "@/components/StyledHeader";

function Residental() {
  return (
    <div className="h-[660px] grid grid-cols-12">
      <div className="col-span-12 sm:col-span-3">
        <div className="bg-[url('/assets/images/residental/image.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
          <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
            Residential care project in Paris
          </p>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-3">
        <div className="bg-[url('/assets/images/residental/image2.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
          <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
            Residential care project in Paris
          </p>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-3">
        <div className="bg-[url('/assets/images/residental/image3.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
          <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
            Residential care project in Paris
          </p>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-3">
        <div className="bg-[url('/assets/images/residental/image4.png')]  flex justify-center h-full w-full bg-cover px-14 py-8">
          <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase w-56">
            Residential care project in Paris
          </p>
        </div>
      </div>
    </div>
  );
}

export default Residental;
