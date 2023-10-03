import StyledHeader from "@/components/StyledHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function About() {
  return (
    <div className=" mx-0 my-12  md:my-24 flex items-center ">
      <div className="container flex  flex-col lg:flex-row ">
        <div className=" w-full lg:w-6/12 xl:w-5/12 hidden md:block">
          <div className="absolute w-[530px] h-[544px]">
            <img
              className="h-full  w-full object-cover"
              src={"/assets/images/landing/about.png"}
              alt={"hero"}
            />
          </div>
          <div className="relative h-full flex items-end justify-center lg:ml-24 lg:-mt-32 xl:ml-10 top-28">
            <div className="absolute w-80 h-48 bg-orange flex justify-center items-center pr-7 pl-10">
              <p className="text-white text-xl font-semibold">
                Ethical and Responsible Manpower Agency in Nepal
              </p>
            </div>
            <div className="relative mb-32 xl:mb-28 lg:mr-80 ">
              <img
                className="max-h-auto  w-full object-cover"
                src={"/assets/images/landing/quote.svg"}
                alt={"hero"}
              />
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center h-[600px]">
          <div className="relative w-[530px] h-[450px] sm:h-[544px]">
            <img
              className="h-full  w-full object-cover"
              src={"/assets/images/landing/about.png"}
              alt={"hero"}
            />
          </div>
          <div className="absolute h-full w-full flex justify-center items-center mt-10">
            <div className="relative w-64 sm:w-80 h-44 sm:h-48 bg-orange flex justify-center items-center pr-7 pl-10">
              <p className="text-white text-xl font-semibold">
                Ethical and Responsible Manpower Agency in Nepal
              </p>
            </div>
            <div className="absolute flex mb-36 sm:mb-36 mr-64 sm:mr-80 items-start">
              <img
                className="max-h-auto w-12 sm:w-20 object-cover"
                src={"/assets/images/landing/quote.svg"}
                alt={"hero"}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-7/12">
          <div className="w-full pr-5 pb-10 sm:pl-20 items-center sm:pt-5 ">
            <div>
              <StyledHeader title="Who we are" />
              <h1 className="mb-6  text-4xl font-semibold text-head">
                About Us
              </h1>
              <p className=" mb-4 mt-4 text-base font-medium leading-8 text-primary text-justify">
                SAAN Nepal stands as an officially sanctioned and licensed
                recruitment agency in Nepal, duly authorized by the Government
                of Nepal. Our agency is dedicated to the principles of ethical
                recruiting, holding a license that underlines our commitment to
                maintaining the highest standards. We have honed our expertise
                in offering exceptional ethical recruitment services, spanning
                positions across the spectrum from entry-level to top-tier
                roles.
              </p>
              <p className=" mb-4 mt-4 text-base font-medium leading-8 text-primary text-justify">
                Our forte lies in responsibly sourcing proficient human
                resources from Nepal and seamlessly linking them with global
                employment opportunities. Upholding a strong ethical recruitment
                stance, we prioritize the alignment of candidate skills with job
                requirements, ensuring a harmonious fit for both job seekers and
                employers. Our unwavering dedication centers on furnishing
                recruitment solutions that not only meet but exceed ethical
                benchmarks, fostering a balanced partnership between all
                stakeholders.
              </p>

              <div className="mt-6">
                <Link href="/about">
                  <Button
                    className="text-xs md:text-sm font-semibold"
                    variant={"blue"}
                    size={"default"}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
