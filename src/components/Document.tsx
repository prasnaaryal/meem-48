import StyledHeader from "@/components/StyledHeader";
import { Button } from "@/components/ui/button";

function Document() {
  const list = [
    {
      id: 1,
      title: "Demand Letter",
      description:
        "Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae arch.",
      bullet: "/assets/images/services/bullet/1.svg",
    },
    {
      id: 2,
      title: "Employment Contract",
      description:
        "Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae arch.",
      bullet: "/assets/images/services/bullet/2.svg",
    },
    {
      id: 3,
      title: "Power of Attorney",
      description:
        "Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae arch.",
      bullet: "/assets/images/services/bullet/3.svg",
    },
    {
      id: 4,
      title: "Agreement Paper",
      description:
        "Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae arch.",
      bullet: "/assets/images/services/bullet/4.svg",
    },
    {
      id: 5,
      title: "Guarantee Letter",
      description:
        "Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae arch.",
      bullet: "/assets/images/services/bullet/5.svg",
    },
  ];

  return (
    <div className="sm:max-h-[584px]  flex items-center ">
      <div
        className="relative flex sm:h-[595px] w-full bg-[url('/assets/images/document.png')]
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
          <div>
            <StyledHeader className="text-white" title="Documents" />
            <h1 className="mb-6  text-4xl font-semibold text-white sm:w-96">
              Document Required
            </h1>
            <p className="mt-5 text-pearl text-base text-justify font-normal leading-[33.6px]">
              To ensure a smooth and efficient recruitment process, we kindly
              request candidates to provide the following documents
            </p>
          </div>
          <div className="grid grid-cols-5 gap-14 mt-12">
            {list.map((item, index) => (
              <div className="col-span-5 sm:col-span-1 flex flex-col gap-8" key={index}>
                <p className="text-white text-base font-semibold leading-5">
                  {item?.title}
                </p>
                <img src={item?.bullet} className="w-12" alt="bullet" />
                <p className="text-white text-base font-normal leading-5">{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Document;
