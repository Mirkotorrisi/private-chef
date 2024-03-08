import React from "react";

type Props = {
  title: string;
  img: string;
  paragraph: string;
  url: string;
};
const Card = ({ title, img, paragraph, url }: Props) => {
  return (
    <div className="relative group max-w-lg overflow-hidden aspect-video flex flex-col gap-8 pt-2 px-4 rounded-lg bg-blue-400">
      <img
        src={img}
        className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-125 ease-in duration-300"
      />
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-black to-transparent "></div>
      <h3 className="text-6xl text-white font-bold z-20">{title}</h3>
      <div className="z-30 pb-2 flex flex-col gap-4 mt-auto translate-y-full group-hover:translate-y-0 ease-in duration-300">
        <p className="text-lg text-white">{paragraph}</p>
        <button className="px-4 py-2 rounded-lg  bg-amber-300">Click me</button>
      </div>
    </div>
  );
};

export default Card;
