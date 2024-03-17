import React from "react";
import useIsOnTop from "../../hooks/useIsOnTop";
import Logo from "../../static/svg/bg-footer-logo.svg";
import Hamburger from "../../static/svg/hamburger.svg";

const Navbar = () => {
  const isOnTop = useIsOnTop();
  const classes = isOnTop
    ? {
        bg: "bg-[#FFFFFF0D] backdrop-blur-sm",
        hamburger: "",
        logo: "*:fill-white",
        language: "text-white",
        cta: "button-solid",
      }
    : {
        bg: "bg-white",
        hamburger: "*:stroke-black",
        language: "divide-black",
        logo: "",
        cta: "button-inverted",
      };
  return (
    <nav
      className={`fixed z-50 w-full flex p-4 lg:px-10 lg:py-6 justify-between items-center ${classes.bg} duration-200 ease-in`}
    >
      <Hamburger className={classes.hamburger} />
      <Logo
        className={`h-12 absolute left-[calc(50%-100px)] ${classes.logo}`}
      />
      <div className="flex gap-6 items-center">
        <div className={`divide-x-2 ${classes.language} font-semibold`}>
          <span className="px-1 hover:cursor-pointer">IT</span>
          <span className="px-1 hover:cursor-pointer">EN</span>
        </div>
        <button className={classes.cta}>Contattaci</button>
      </div>
    </nav>
  );
};

export default Navbar;
