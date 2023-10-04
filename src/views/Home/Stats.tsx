function Document() {
    return (
      <div className="  flex items-center ">
        <div
          className="relative flex sm:h-[307px] w-full bg-[url('/assets/images/stats.png')]
          bg-cover  bg-center align-middle xl:px-5"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                " linear-gradient(0deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.76) 100%)",
            }}
          />
          <div className="container h-full w-full py-14 z-10">
            <div className="grid grid-cols-12 gap-5 h-full">
              <div className="col-span-12 sm:col-span-4 flex justify-start items-center gap-4 h-full py-10 sm:py-0">
                <p className="text-white text-6xl font-normal leading-[72px] tracking-wide">
                  100%
                </p>
                <p className="text-white text-base font-normal leading-6 tracking-wide uppercase w-20">
                  SATISFITATION CLIENTS
                </p>
              </div>
  
              <div className="col-span-12 sm:col-span-4 flex sm:justify-center items-center gap-4 h-full py-10 sm:py-0">
                <p className="text-white text-6xl font-normal leading-[72px] tracking-wide">
                  250%
                </p>
                <p className="text-white text-base font-normal leading-6 tracking-wide uppercase w-48">
                  EMPLOYEES ON WORLDWIDE
                </p>
              </div>
  
              <div className="col-span-12 sm:col-span-4 flex sm:justify-center items-center gap-4 h-full py-10 sm:py-0">
                <p className="text-white text-6xl font-normal leading-[72px] tracking-wide">
                  1850
                </p>
                <p className="text-white text-base font-normal leading-6 tracking-wide uppercase w-48">
                  PROJECTS COMPLETED ON 60 COUNTRIE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Document;
  