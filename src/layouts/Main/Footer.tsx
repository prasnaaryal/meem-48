import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/social-button";

const Footer = () => {
  const data = [
    {
      title: "CSER Policy Statement",
      url: "/cser-policy",
    },
    {
      title: "Quality Policy",
      url: "/quality-policy",
    },
    {
      title: "Whistle Blower Policy",
      url: "/whistle-blower-policy",
    },
    {
      title: "Anti-human trafficking and modern slavery prohibition Policy",
      url: "/anti-human-trafficking-and-modern-slavery-prohibtion-policy",
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
    },
  ];
  const data1 = [
    {
      title: "Ministry of Labour, Employment and Social Security",

      url: "https://moless.gov.np/np",
    },
    {
      title: "Department of Foreign Employment",
      url: "https://dofe.gov.np/",
    },
    {
      title: "Foreign Employment Promotion Board",
      url: "https://feb.gov.np/",
    },
    {
      title: "Nepal Association of Foreign Employment Agencies",
      url: "https://www.nafea.org.np/cgi-sys/suspendedpage.cgi",
    },
  ];
  return (
    <footer className="  bg-lightBlue pb-10 pt-12 pl-131  w-full">
      <div className="container mx-auto max-w-screen-xl ">
        <div className="flex flex-col items-start justify-center gap-8 md:flex-row sm:gap-14">
          <div className="mb-2 flex h-full flex-col items-start justify-between sm:mb-6 md:w-1/3 md:mb-0">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                className="mr-3"
                width={"264"}
                height={"85"}
                alt="FlowBite Logo"
              />
            </Link>
            <p className="mt-7 text-lg md:text-sm text-primary text-justify">
              Fermentum odio eu feugiat pretiums nibh. Dolor sit consectetur
              adipiscini over the aenean bcom here.
            </p>
            <div className="flex gap-2 mt-7">
              <Button className="rounded-full px-4" size={"default"}>
                <Image
                  src="/assets/images/socials/fb.svg"
                  width={"9"}
                  height={"10"}
                  alt="Facebook Logo"
                />
              </Button>
              <Button className="rounded-full" size={"default"}>
                <Image
                  src="/assets/images/socials/twitter.svg"
                  width={"15"}
                  height={"10"}
                  alt="Twitter Logo"
                />
              </Button>
              <Button className="rounded-full" size={"default"}>
                <Image
                  src="/assets/images/socials/linkedin.svg"
                  width={"15"}
                  height={"10"}
                  alt="LinkedIn Logo"
                />
              </Button>
              <Button className="rounded-full" size={"default"}>
                <Image
                  src="/assets/images/socials/pinterest.svg"
                  width={"15"}
                  height={"10"}
                  alt="Pinterest Logo"
                />
              </Button>
              <Button className="rounded-full" size={"default"}>
                <Image
                  src="/assets/images/socials/youtube.svg"
                  width={"15"}
                  height={"10"}
                  alt="Youtube Logo"
                />
              </Button>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col  justify-center sm:w-auto sm:flex-row sm:justify-between ">
            <div className="w-80 md:w-50 lg:w-80 p-2.5 pb-3.5 pl-5 flex flex-col gap-7">
              <div className="bg-blue-500 bg-opacity-20 w-6 h-6 rounded-full absolute mr-2 " />
              <div className="ml-2">
                <h2 className="text-xl font-bold text-head ">Support:</h2>
              </div>
              <ul className="pt-4 text-sm">
                {data.map((el, index) => (
                  <li
                    key={index}
                    className="mb-2 list-disc font-medium text-primary custom-bullet "
                  >
                    <a href={el?.url} className="hover:underline">
                      {el?.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-80 md:w-50 lg:w-80  pt-2.5 pb-3.5 flex flex-col gap-7">
              <div className="bg-blue-500 bg-opacity-20 w-6 h-6 rounded-full absolute mr-2 " />
              <div className="ml-2">
                <h2 className=" text-xl font-bold text-head ">Useful Links:</h2>
              </div>
              <ul className="list-disc pt-4 text-sm md:w-64 ">
                {data1.map((item, index) => (
                  <li
                    key={index}
                    className="mb-2 font-medium text-primary custom-bullet "
                  >
                    <a
                      href={item?.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline"
                    >
                      {item?.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="justify-between px-2 sm:flex sm:items-center">
          <span className="mt-5 text-right  text-sm text-[#707070] sm:text-center">
            @ Copyright 2023{" "}
            <a href="#" className="hover:underline">
              meem48.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
