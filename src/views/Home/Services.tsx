import StyledHeader from "@/components/StyledHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Servies() {
  const mainServices = [
    {
      title: "Architectural Design",
      icon: "/assets/images/services/blueprint.svg",
    },
    {
      title: "Engineering Consulatation",
      icon: "/assets/images/services/tech.svg",
    },
    {
      title: "3D Object Library (OBJ/NFT)",
      icon: "/assets/images/services/nft.svg",
    },
    {
      title: "Research Empowerment",
      icon: "/assets/images/services/research.svg",
    },
  ];
  const subServices = [
    {
      title: "Web Development",
      icon: "/assets/images/services/code.svg",
    },
    {
      title: "Branding Service",
      icon: "/assets/images/services/brand.svg",
    },
    {
      title: "Shoping Selection",
      icon: "/assets/images/services/selection.svg",
    },
  ];

  return (
    <div className="container py-36" id="services">
      <div className="grid grid-cols-12 gap-5 sm:gap-10 w-full">
        <div className="col-span-12 lg:col-span-6  sm:w-full h-[300px] sm:h-[714px] sm:pr-14">
          <img
            src="/assets/images/services.png"
            className="w-full h-full object-cover"
            alt="about"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 w-full flex flex-col pt-10 gap-10">
          <div className="flex flex-col gap-3">
            <StyledHeader title="Services" singleLine={true} />
            <h1 className="mb-6 text-2xl  sm:text-4xl font-medium text-head sm:w-[550px]">
              Our Comprehensive Architectural Solutions
            </h1>
          </div>

          <div className="flex flex-col gap-14">
            <p className="text-subHead text-lg font-light leading-8 text-justify">
              Unlock a world of architectural innovation with our diverse range
              of services tailored to meet your every need:
            </p>
            <Tabs defaultValue="tab1">
              <TabsList className="w-full">
                <TabsTrigger
                  value="tab1"
                  className="w-full text-lg font-medium border-b-2 border-primary"
                >
                  Main Services
                </TabsTrigger>
                <TabsTrigger
                  value="tab2"
                  className="w-full  text-lg font-medium border-b-2 border-primary"
                >
                  Sub-Servicess
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="pt-14 ">
                <div className="grid grid-cols-12 gap-5">
                  {mainServices.map((service, index) => (
                    <div
                      className="col-span-6 sm:col-span-3 bg-cream flex flex-col items-center justify-center w-full border-b-2 border-primary gap-4 py-4"
                      key={index}
                    >
                      <img
                        src={service?.icon}
                        alt={service?.title}
                        className="w-10 h-10"
                      />
                      <p className="text-grey text-base font-normal leadong-4 text-center">
                        {service?.title}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tab2" className="py-14">
                <div className="grid grid-cols-12 gap-5">
                  {subServices.map((service, index) => (
                    <div
                      className="col-span-6 sm:col-span-3 bg-cream flex flex-col items-center justify-center w-full border-b-2 border-primary gap-4 py-4"
                      key={index}
                    >
                      <img
                        src={service?.icon}
                        alt={service?.title}
                        className="w-10 h-10"
                      />
                      <p className="text-grey text-base font-normal leadong-4 text-center w-20">
                        {service?.title}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servies;
