import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  FormattedMessage,
  WrappedComponentProps,
  injectIntl,
} from "gatsby-plugin-intl";
import * as React from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Accordion from "../components/Accordion";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stepper from "../components/Stepper";
import useParallax from "../hooks/useParallax";
import NextBtn from "../static/svg/button-next.svg";
import PrevBtn from "../static/svg/button-prev.svg";
import Cutlery from "../static/svg/cutlery.svg";
import "./index.scss";

const faq = [...Array(4).keys()].map((i) => ({
  title: `services.faq-${i + 1}-h`,
  content: `services.faq-${i + 1}-p`,
}));

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const mainRef = useParallax();
  return (
    <main className="w-full min-h-screen" ref={mainRef}>
      <Navbar />
      <Hero />
      <section className="p-4 md:p-6 lg:p-10 xl:p-20 py-8 md:py-10 lg:py-20 w-full grid md:grid-cols-2 items-center">
        <div className="space-y-2 max-w-[600px]">
          <h2>
            <FormattedMessage id="services.s-1-h" />
          </h2>
          <p>
            <FormattedMessage id="services.s-1-p" />
          </p>
        </div>
        <StaticImage
          src="../static/img/services-10.png"
          className="mt-20 md:mt-0"
          alt="cutting some prezzemolo"
        />
      </section>
      <div className="w-full relative h-[160px] md:h-[330px] lg:h-[440px] xl:h-[550px] 2xl:h-[660px]  overflow-hidden">
        <div className="absolute inset-0 z-20 size-full bg-gradient-to-t from-white via-transparent to-white" />
        <div
          className="absolute size-full inset-0 parallax-bg"
          data-speed=".1275"
        >
          <StaticImage
            src="../static/img/services-2-2.jpg"
            className="!absolute size-[150%]"
            alt="something"
          />
        </div>
      </div>
      <section className="w-full grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 py-8 lg:p-10 xl:p-20">
        <h2>
          <FormattedMessage id="services.s-2-h" />
        </h2>
        <p>
          <FormattedMessage id="services.s-2-p" />
        </p>
      </section>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-10 xl:px-20 pb-8 lg:pb-10 xl:pb-20">
        <div className="md:mt-8">
          <Card
            tag="services.tag-1"
            title="services.card-h-1"
            paragraph="services.card-p-1"
            url="/"
          >
            <StaticImage
              alt="random"
              src={"../static/img/services-3.jpg"}
              className="w-full h-full !absolute top-0 left-0 object-cover group-hover:scale-125 ease-in duration-300"
            />
          </Card>
        </div>
        <div className="lg:mb-8">
          <Card
            tag="services.tag-2"
            title="services.card-h-2"
            paragraph="services.card-p-2"
            url="/"
          >
            <StaticImage
              alt="random"
              src={"../static/img/services-4.jpeg"}
              className="w-full h-full !absolute top-0 left-0 object-cover group-hover:scale-125 ease-in duration-300"
            />
          </Card>
        </div>
      </div>
      <section className="py-8 px-4 md:py-10 md:px-6 lg:py-20 lg:px-10 xl:p-20 flex flex-col md:grid md:grid-cols-2">
        <div className="space-y-2 max-w-[600px] md:order-2 md:pl-10 xl:pl-20">
          <h2>
            <FormattedMessage id="services.s-4-h" />
          </h2>
          <p className="pb-6">
            <FormattedMessage id="services.s-4-p" />
          </p>
          <div className="grid grid-cols-2 gap-4 pt-6 pb-8 border-t">
            {[...Array(4).keys()].map((c) => (
              <div className="flex items-center gap-2" key={c + 1}>
                <Cutlery className="size-5" />
                <span className="uppercase text-sm font-semibold leading-5">
                  <FormattedMessage id={`services.s-4-s-${c + 1}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:order-1 w-auto md:pr-10 xl:pr-20 max-w-[600px] flex">
          <StaticImage
            src="../static/img/services-10.png"
            alt="soe"
            className="mx-auto"
          />
        </div>
      </section>
      <div className="w-full relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
        >
          <SwiperSlide>
            <StaticImage
              src="../static/img/services-5.jpg"
              alt={""}
              className="size-full aspect-video"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../static/img/services-6.jpeg"
              alt={""}
              className="size-full aspect-video"
            />
          </SwiperSlide>
          <div className="absolute z-20 top-[46.5%] left-0 w-full px-4 md:px-8 flex justify-between">
            <div className="button-prev hover:cursor-pointer">
              <PrevBtn className="size-8 md:size-12" />
            </div>
            <div className="button-next hover:cursor-pointer">
              <NextBtn className="size-8 md:size-12" />
            </div>
          </div>
        </Swiper>
      </div>
      <section className="py-8 px-4 md:py-10 md:px-6 lg:py-20 lg:px-10 xl:p-20 grid md:grid-cols-2 bg-stone-900">
        <div className="space-y-2 max-w-[600px] pb-8 md:pb-0">
          <h2 className="text-white">
            <FormattedMessage id="services.s-6-h" />
          </h2>
          <p className="text-[#EDEDED]">
            <FormattedMessage id="services.s-6-p" />
          </p>
          <button className="button-solid !mt-8">
            <FormattedMessage id="services.card-cta" />
          </button>
        </div>
        <Stepper />
      </section>
      <section className="pb-8 px-4 md:pb-10 md:px-6 lg:pb-20 lg:px-10 xl:px-20 half-bg md:grid-cols-3 gap-8 lg:gap-10 xl:gap-20 hidden md:grid">
        <div className="parallax-bg" data-speed=".03">
          <StaticImage
            src="../static/img/services-8.jpeg"
            className="aspect-[287/384] object-cover md:mt-8 lg:mt-10 xl:mt-20 parallax-bg"
            alt=""
          />
        </div>
        <div className="parallax-bg" data-speed="-.03">
          <StaticImage
            src="../static/img/services-7.jpeg"
            className="aspect-[287/384] object-cover"
            alt=""
          />
        </div>
        <div className="parallax-bg mt-8 lg:mt-10 xl:mt-20" data-speed=".03">
          <StaticImage
            src="../static/img/services-6.jpeg"
            className="aspect-[287/384] object-cover"
            alt=""
          />
        </div>
      </section>
      <section className="bg-stone-100 py-8 px-4 md:py-10 md:px-6 lg:py-20 lg:px-10 xl:p-20 grid md:grid-cols-2 md:gap-12 lg:gap-20 2xl:gap-40">
        <div className="space-y-2">
          <span className="text-stone-900 bg-stone-200 rounded-sm px-2 py-1 uppercase text-sm font-semibold leading-5">
            <FormattedMessage id="services.tag-3" />
          </span>
          <h2 className="mb-2 lg:mb-4">
            <FormattedMessage id="services.s-7-h" />
          </h2>
          <p className="body-2 max-w-[800px] pb-8">
            <FormattedMessage id="services.s-7-p" />
          </p>
        </div>

        <Accordion items={faq} />
      </section>
      <Footer />
    </main>
  );
};

export default injectIntl(
  IndexPage as unknown as React.ComponentType<WrappedComponentProps<"intl">>
);

export const Head: HeadFC = () => (
  <title>Services - Private Chef Catania</title>
);
