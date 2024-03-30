import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";
import useIsOnTop from "../../hooks/useIsOnTop";
import Logo from "../../static/svg/bg-footer-logo.svg";
import Envelope from "../../static/svg/envelope.svg";
import Hamburger from "../../static/svg/hamburger.svg";
import Language from "../Language";

const Navbar = () => {
  const isOnTop = useIsOnTop();
  const classes = isOnTop
    ? {
        bg: "bg-[#FFFFFF0D] backdrop-blur-sm",
        hamburger: "",
        logo: "*:fill-white",
        language: "text-white",
        cta: "button-solid",
        envelope: "",
      }
    : {
        bg: "bg-white",
        hamburger: "*:stroke-black",
        language: "divide-black",
        logo: "",
        cta: "button-inverted",
        envelope: "*:fill-white",
      };
  return (
    <nav
      className={`fixed z-50 w-full flex p-4 lg:px-10 lg:py-6 justify-between items-center ${classes.bg} duration-200 ease-in`}
    >
      <Hamburger className={classes.hamburger} />
      <Logo
        className={`h-8 lg:h-12 absolute left-[calc(50%-80px)] lg:left-[calc(50%-100px)] ${classes.logo}`}
      />
      <div className="flex gap-6 items-center">
        <div
          className={`divide-x-2 ${classes.language} font-semibold hidden lg:block`}
        >
          <Language />
        </div>
        <button className={`${classes.cta} px-6 lg:px-8`}>
          <span className="hidden lg:block">
            <FormattedMessage id="contact-cta" />
          </span>
          <Envelope className={`${classes.envelope} lg:hidden`} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
