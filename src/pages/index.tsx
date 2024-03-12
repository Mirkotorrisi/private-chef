import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { WrappedComponentProps, injectIntl } from "gatsby-plugin-intl";
import * as React from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Accordion from "../components/Accordion";
import Card from "../components/Card";
import Hero from "../components/Hero";
import NextBtn from "../static/svg/button-next.svg";
import PrevBtn from "../static/svg/button-prev.svg";
import Cutlery from "../static/svg/cutlery.svg";
import Step1 from "../static/svg/step-1.svg";
import Step2 from "../static/svg/step-2.svg";
import Step3 from "../static/svg/step-3.svg";
import "./index.scss";

const chooseUs = [
  "Massima Qualità",
  "Menu personalizzato",
  "Attenzione ai dettagli",
  "alta professionalità",
];

const faq = [
  {
    title: "Cos'è esattamente il servizio di Private Chef?",
    content:
      "Il nostro servizio di Private Chef porta l'eccellenza della cucina gourmet direttamente a casa tua. Uno chef professionista si occuperà di preparare un pasto su misura per te e i tuoi ospiti, curando ogni dettaglio dall'acquisto degli ingredienti alla pulizia finale della cucina.",
  },
  {
    title: "Posso personalizzare il menu per il mio evento?",
    content:
      "Il nostro servizio di Private Chef porta l'eccellenza della cucina gourmet direttamente a casa tua. Uno chef professionista si occuperà di preparare un pasto su misura per te e i tuoi ospiti, curando ogni dettaglio dall'acquisto degli ingredienti alla pulizia finale della cucina.",
  },
  {
    title:
      "È possibile includere una Cooking Class o una Degustazione di Vino nel mio evento?",
    content:
      "Il nostro servizio di Private Chef porta l'eccellenza della cucina gourmet direttamente a casa tua. Uno chef professionista si occuperà di preparare un pasto su misura per te e i tuoi ospiti, curando ogni dettaglio dall'acquisto degli ingredienti alla pulizia finale della cucina.",
  },
  {
    title: "Quanto in anticipo devo prenotare il servizio di Private Chef?",
    content:
      "Il nostro servizio di Private Chef porta l'eccellenza della cucina gourmet direttamente a casa tua. Uno chef professionista si occuperà di preparare un pasto su misura per te e i tuoi ospiti, curando ogni dettaglio dall'acquisto degli ingredienti alla pulizia finale della cucina.",
  },
];
const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <section className="p-4 md:p-6 lg:p-10 xl:p-20 py-8 md:py-10 lg:py-20 flex w-full flex-col md:flex-row items-center">
        <div className="space-y-2 max-w-[600px]">
          <h2>Il tuo Chef Privato</h2>
          <p>
            Scopri il piacere di avere uno chef professionista che cucina per te
            e i tuoi ospiti. Dall'intima colazione in famiglia, al pranzo di
            lavoro, fino alla cena di gala, lo chef trasformerà ogni pasto in
            un'occasione speciale.
          </p>
        </div>
        <StaticImage
          src="../static/img/services-2.jpeg"
          className=""
          alt="cutting some prezzemolo"
        />
      </section>
      <div className="w-full relative h-[160px] md:h-[330px] lg:h-[440px] xl:h-[550px] 2xl:h-[660px]">
        <div className="absolute inset-0 z-20 size-full bg-gradient-to-t from-white via-transparent to-white" />
        <StaticImage
          src="../static/img/services-2.jpeg"
          className="size-full absolute inset-0"
          alt="something"
        />
      </div>
      <section className="w-full grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 py-8 lg:p-10 xl:p-20">
        <h2 className="mb-4 md:mb-0">Il Gusto e le sue sfumature</h2>
        <p>
          Eleva la tua esperienza di Private Chef con due straordinarie
          opportunità: immergiti nell'arte culinaria con una Cooking Class
          interattiva o esplora il mondo dei vini con una esclusiva Degustazione
          guidata. Ogni scelta è progettata per arricchire il tuo evento,
          offrendo momenti unici di apprendimento e condivisione.
        </p>
      </section>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-10 xl:px-20 pb-8 lg:pb-10 xl:pb-20">
        <div className="md:mt-8">
          <Card
            tag="wine experience"
            title="Trasforma la tua cena in una lezione di cucina."
            paragraph="Invita i tuoi ospiti a unirsi a te e allo chef in una cooking class interattiva, dove insieme scoprirete tecniche e segreti culinari. È l'aggiunta perfetta per rendere l'esperienza di Private Chef ancora più memorabile e personale"
            url="/"
          >
            <StaticImage
              alt="random"
              src={"../static/img/services-4.jpeg"}
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-125 ease-in duration-300"
            />
          </Card>
        </div>
        <div className="lg:mb-8">
          <Card
            tag="cooking class"
            title="Arricchisci il tuo evento con abbinamenti unici."
            paragraph="Aggiungi al tuo evento una selezionata degustazione di vini, guidata dal tuo Chef Privato Un percorso di sapori che completerà i piatti scelti, rendendo ogni momento del pasto un'esperienza di scoperta e piacere"
            url="/"
          >
            <StaticImage
              alt="random"
              src={"../static/img/services-5.jpeg"}
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-125 ease-in duration-300"
            />
          </Card>
        </div>
      </div>
      <section className="py-8 px-4 md:py-10 md:px-6 lg:py-20 lg:px-10 xl:p-20 flex flex-col md:grid md:grid-cols-2">
        <div className="space-y-2 max-w-[600px] md:order-2 md:pl-10 xl:pl-20">
          <h2>Perché scegliere PrivateChef</h2>
          <p>
            Ogni aspetto del nostro servizio è pensato per offrirti non solo
            pasti squisiti ma vere e proprie esperienze memorabili, adattate
            alle tue preferenze personali e alle esigenze dei tuoi ospiti.
            Scopri perché sempre più persone scelgono di affidarsi alla nostra
            professionalità e passione.
          </p>
          <div className="grid grid-cols-2 gap-4 !mt-12">
            {chooseUs.map((c) => (
              <div className="flex items-center gap-2" key={c}>
                <Cutlery className="size-5" />
                <span className="uppercase text-sm font-semibold leading-5">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:order-1 w-auto md:pr-10 xl:pr-20 max-w-[600px] flex">
          <StaticImage
            src="../static/img/services-9.png"
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
              src="../static/img/services-5.jpeg"
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
          <div className="absolute z-20 top-[48.5%] left-0 w-full px-8 flex justify-between">
            <div className="button-prev hover:cursor-pointer">
              <PrevBtn className="size-12" />
            </div>
            <div className="button-next hover:cursor-pointer">
              <NextBtn className="size-12" />
            </div>
          </div>
        </Swiper>
      </div>
      <section className="py-8 px-4 md:py-10 md:px-6 lg:py-20 lg:px-10 xl:p-20 grid md:grid-cols-2 bg-stone-900">
        <div className="space-y-2 max-w-[600px] pb-8 md:pb-0">
          <h2 className="text-white">Richiedi il tuo chef</h2>
          <p className="text-[#EDEDED]">
            Lasciati sorprendere dalla magia di una cena gourmet personalizzata,
            preparata e servita nella comodità della tua casa. Non perdere
            l'opportunità di rendere memorabile ogni momento con sapori unici e
            servizi esclusivi.
          </p>
          <button className="px-8 py-4 rounded bg-white !mt-8">
            Penota la tua esperienza
          </button>
        </div>
        <div className="flex flex-col pt-8 md:pt-0">
          <div className="flex flex-1 gap-6">
            <div className="flex flex-col items-center">
              <Step1 className="size-10 lg:size-20 xl:size-40" />
              <div className="w-[2px] lg:w-[4px] h-full bg-white" />
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white ">Consultazione Iniziale</h4>
              <p className="body-3 text-white">
                Condividi le tue preferenze e desideri. Insieme, progetteremo il
                tuo evento perfetto.
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-6">
            <div className="flex flex-col items-center">
              <Step2 className="size-10 lg:size-20 xl:size-40" />
              <div className="w-[2px] lg:w-[4px] h-full bg-white" />
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white ">Scelta del Menu</h4>
              <p className="body-3 text-white">
                Condividi le tue preferenze e desideri. Insieme, progetteremo il
                tuo evento perfetto.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-6">
            <div className="flex flex-col items-center">
              <Step3 className="size-10 lg:size-20 xl:size-40" />
              <div className="w-[2px] lg:w-[4px] h-full " />
            </div>{" "}
            <div className="space-y-2 ">
              <h4 className="text-white ">Scelta del Menu</h4>
              <p className="body-3 text-white">
                Condividi le tue preferenze e desideri. Insieme, progetteremo il
                tuo evento perfetto.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 px-4 md:pb-10 md:px-6 lg:pb-20 lg:px-10 xl:px-20  half-bg grid md:grid-cols-3 gap-8 lg:gap-10 xl:gap-20">
        <StaticImage
          src="../static/img/services-8.jpeg"
          className="aspect-[287/384] object-cover md:mt-8 lg:mt-10 xl:mt-20"
          alt=""
        />
        <StaticImage
          src="../static/img/services-7.jpeg"
          className="aspect-[287/384] object-cover hidden md:block"
          alt=""
        />
        <StaticImage
          src="../static/img/services-6.jpeg"
          className="aspect-[287/384] object-cover hidden md:block md:mt-8 lg:mt-10 xl:mt-20"
          alt=""
        />
      </section>
      <section className="bg-stone-100 py-8 px-4 md:py-10 md:px-6 lg:py-20 lg:px-10 xl:p-20 grid md:grid-cols-2 md:gap-12 lg:gap-20 2xl:gap-40">
        <div className="space-y-2">
          <span className="text-white bg-stone-500 rounded-sm px-2 py-1 uppercase text-sm font-semibold leading-5">
            FAQ
          </span>
          <h2 className="mb-2 lg:mb-4">Domande frequenti</h2>
          <p className="body-2 max-w-[800px]">
            Hai delle domande sul nostro servizio di PrivateChef? Qui trovi le
            risposte alle domande più comuni per aiutarti a conoscere meglio
            come possiamo trasformare il tuo evento in un'esperienza
            gastronomica indimenticabile.
          </p>
        </div>

        <Accordion items={faq} />
      </section>
    </main>
  );
};

export default injectIntl(
  IndexPage as unknown as React.ComponentType<WrappedComponentProps<"intl">>
);

export const Head: HeadFC = () => <title>Home Page</title>;
