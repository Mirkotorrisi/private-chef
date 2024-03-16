import React from "react";
import Logo from "../../static/svg/bg-footer-logo.svg";
import FbLogo from "../../static/svg/fb_logo.svg";

const provisionalLinks = [
  { label: "Home", link: "/" },
  { label: "Home", link: "/" },
  { label: "Home", link: "/" },
  { label: "Home", link: "/" },
  { label: "Home", link: "/" },
];
const Footer = () => {
  return (
    <footer className="w-full bg-stone-100 border border-t py-8 px-4 md:py-10 md:px-6 lg:p-10 xl:px-20 flex flex-col divide-y divide-[#D6D3D1]        ">
      <ul className="flex flex-col gap-4 md:flex-row mb-6">
        <Logo className="w-[134px] h-8 mr-auto" />
        {provisionalLinks.map((item, i) => {
          const twClass = `label-2 hover:text-rose-500  duration-300 ease-in after:content-[attr(data-after)] after:block`;
          return (
            <div
              className="overflow-hidden max-h-6 lg:max-h-7"
              key={item.label + i}
            >
              <li className="hover:translate-y-[-50%] duration-300 ease-in">
                <a href={item.link} data-after={item.label} className={twClass}>
                  {item.label}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
      <div className="flex flex-col gap-2 md:flex-row pt-6 ">
        <span className="body-3 text-stone-500 md:border-r md:border-stone-500 md:pr-2">
          PrivateChef Catania © 2024
        </span>
        <span className="body-3 text-stone-500 md:border-r md:border-stone-500 md:pr-2">
          P.Iva 05941450875
        </span>
        <a href="" className="body-3 text-stone-500 underline">
          Privacy Policy
        </a>
        <div className="mt-4 md:mt-0 md:ml-auto flex gap-8">
          <FbLogo className="" />
          <FbLogo className="" />
          <FbLogo className="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
