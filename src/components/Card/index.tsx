import React, { ReactNode } from "react";
import "./index.scss";

type Props = {
  tag: string;
  title: string;
  children: ReactNode;
  paragraph: string;
  url: string;
};
const Card = ({ children, tag, title, paragraph, url }: Props) => {
  return (
    <div className="card aspect-square relative group overflow-hidden flex flex-col justify-end p-6 pt-10 lg:p-8">
      {children}
      <div className="absolute top-0 left-0 w-full h-full z-10 grey-gradient"></div>
      <span className="z-20 text-white bg-stone-500 rounded-sm px-2 py-1 uppercase mb-2 md:mb-5 text-sm font-semibold leading-5 mr-auto">
        {tag}
      </span>
      <h4 className=" text-white z-20 mb-2 lg:mb-4">{title}</h4>
      <div className="z-30 flex flex-col gap-4">
        <div className="ease-out duration-300 md:mb-[-100%] group-hover:mb-0 space-y-3 md:space-y-6 md:pb-4">
          <p className="text-lg body-3 text-white md:opacity-0 ease-in duration-300 group-hover:opacity-100">
            {paragraph}
          </p>
          <button className="button-solid">Penota la tua esperienza</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
