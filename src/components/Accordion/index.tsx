import React, { SyntheticEvent } from "react";
import Chevron from "../../static/svg/chevron.svg";
import "./index.scss";

type Props = {
  items: {
    title: string;
    content: string;
  }[];
};
const closeDetails = (e: SyntheticEvent<HTMLDetailsElement, Event>) => {
  if (e.currentTarget.open) {
    document.querySelectorAll("details").forEach((el) => {
      if (el !== e.currentTarget) el.open = false;
    });
  }
};
const Accordion = ({ items }: Props) => (
  <div className=" space-y-8">
    {items.map((item) => (
      <details
        className="border-b border-stone-200 py-2 body-3 "
        key={item.title}
        onToggle={closeDetails}
      >
        <summary className="bold-2 flex items-center justify-between w-full pb-2">
          {item.title}
          <Chevron className="w-4 h-2 duration-300 ease-in chevron" />
        </summary>

        {item.content}
      </details>
    ))}
  </div>
);

export default Accordion;