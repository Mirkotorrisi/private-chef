import { StaticImage } from "gatsby-plugin-image";
import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";
import ScrollDownArrow from "../../static/svg/scroll-down-arrow.svg";
import ScrollDownBtn from "../../static/svg/scroll-down.svg";

const Hero = () => {
  return (
    <header className="p-4 md:p-6 lg:p-10 xl:p-20 flex w-full relative overflow-hidden h-[812px] md:h-[1024px] lg:h-[668px] 2xl:h-[819px]">
      <StaticImage
        src="../../static/img/hero-services-2.jpg"
        alt="hands of a chef"
        className="z-0 !absolute inset-0 size-full object-cover"
      />

      <div className="w-full h-full z-10 bg-black opacity-75 absolute inset-0" />
      <div className="flex flex-col lg:flex-row justify-between w-full mg:items-end">
        <div className=" text-white flex flex-col gap-6 mt-auto z-20 max-w-[420px] lg:max-w-[600px] 2xl:max-w-[800px]">
          <h1>
            <FormattedMessage id="services.hero-h" />
          </h1>
          <p className="text-[#EDEDED]">
            <FormattedMessage id="services.hero-p" />
          </p>
        </div>
        <div className="mt-8 md:mt-auto relative place-content-center size-[120px] md:size-[160px] hover:cursor-pointer flex">
          <ScrollDownBtn className="absolute inset-0 z-20 size-[120px] md:size-[160px] animate-spin hover:animate-spinslow" />
          <ScrollDownArrow className="absolute inset-0 z-10 size-[120px] md:size-[160px] " />
        </div>
      </div>
    </header>
  );
};

export default Hero;
