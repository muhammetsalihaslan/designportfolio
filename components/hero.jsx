import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col ">
      <div className="flex flex-col  justify-center items-center lg:mt-[3rem]  ">
        <h1 className="text-[30px] lg:text-[56px] font-bold ">
          Design solutions made easy
        </h1>
        <p className="text-lg text-[#7A746E] lg:w-3/5 flex justify-center text-center mt-3 ">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <div className=" xl:h-[384px]  mt-[3rem] xl:flex xl:flex-row gap-x-6 gap-y-6 ">
        <div className=" xl:w-2/3  md:flex gap-x-6">
          <div className="md:w-1/2 h-[384px] rounded-md  bg-[#755CDE] ">
            <div className="h-1/2 flex justify-end">
              <Image
                src="./image/pattern-graphic-design.svg"
                width={130}
                height={120}
                className=" p-2"
              />
            </div>
            <div className="h-1/2 flex ms-5 items-center mt-7">
              <h1 className="text-2xl text-white font-bold">Graphic Design</h1>
            </div>
          </div>
          <div className="md:w-1/2 h-[384px] rounded-md flex flex-col gap-y-4 mt-6 md:mt-0   ">
            <div className="h-1/2 flex gap-x-3">
              <div className="bg-[#F6A560] w-1/2 rounded-md">
                <div className="flex justify-end">
                  <Image
                    src="./image/pattern-ui-ux.svg"
                    width={65}
                    height={65}
                    className=" p-2"
                  />
                </div>
                <div className="h-1/2 flex ms-5 items-center mt-3">
                  <h1 className="text-2xl text-white font-bold">UI/UX</h1>
                </div>
              </div>
              <div className="bg-[#F39E9E] w-1/2 rounded-md">
                <div className="flex justify-end">
                  <Image
                    src="./image/pattern-apps.svg"
                    width={65}
                    height={65}
                    className=" p-2"
                  />
                </div>
                <div className="h-1/2 flex ms-5 items-center mt-3">
                  <h1 className="text-2xl text-white font-bold">Apps</h1>
                </div>
              </div>
            </div>
            <div className="h-1/2 bg-[#EB7565] rounded-md">
              <div className="flex justify-end">
                <Image
                  src="./image/pattern-illustrations.svg"
                  width={150}
                  height={70}
                  className=" p-2"
                />
              </div>
              <div className="h-1/2 flex ms-5 items-center mt-3">
                <h1 className="text-2xl text-white font-bold">Illustrations</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:w-1/3 h-[384px] rounded-md flex flex-col gap-y-4 mt-6 xl:mt-0 ">
          <div className="h-1/2 bg-[#61C4B7] rounded-md">
            <div className="flex justify-end">
              <Image
                src="./image/pattern-photography.svg"
                width={150}
                height={70}
                className=" p-2"
              />
            </div>
            <div className="h-1/2 flex ms-5 items-center mt-3">
              <h1 className="text-2xl text-white font-bold">Photography</h1>
            </div>
          </div>
          <div className="h-1/2 bg-[#552049] rounded-md">
            <div className="flex justify-end">
              <Image
                src="./image/pattern-motion-graphics.svg"
                width={150}
                height={70}
                className=" p-2"
              />
            </div>
            <div className="h-1/2 flex ms-5 items-center mt-3">
              <h1 className="text-2xl text-white font-bold">Motion Graphics</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:h-[384px] xl:flex mt-[15rem] justify-start items-center  ">
        <div className="flex justify-center items-center">
          <Image
            src="/image/image-amy.webp"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="flex flex-col  ms-[5rem]  justify-start gap-y-6 ">
          <h1 className="text-5xl font-bold">
            I’m Amy, and I’d love to work on your next project
          </h1>
          <p className="text-2xl text-[#7A7487]">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <button className="h-10 w-40 bg-[#EB7565] text-white rounded-full hover:bg-[#F6A560]">
            Free Consultion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
