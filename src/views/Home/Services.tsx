import StyledHeader from "@/components/StyledHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Services() {
  return (
    <div className="container py-36">
      <div className="grid grid-cols-12 gap-5 sm:gap-10 w-full">
        <div className="col-span-12 lg:col-span-6  sm:w-full h-[300px] sm:h-[714px] sm:pr-14">
          <img
            src="/assets/images/services.png"
            className="w-full h-full object-cover"
            alt="about"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 w-full flex flex-col justify-center gap-10">
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
                  className="w-full text-lg font-medium"
                >
                  Main Services
                </TabsTrigger>
                <TabsTrigger
                  value="tab2"
                  className="w-full  text-lg font-medium"
                >
                  Sub-Servicess
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="py-10 ">
                111111
              </TabsContent>
              <TabsContent value="tab2" className="py-10">
                222222
              </TabsContent>
            </Tabs>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Services;