import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useParallax = () => {
  const mainRef = useRef(null);
  // wide img with gradient parallax
  useGSAP(
    () => {
      gsap.to(".parallax-bg ", {
        scrollTrigger: {
          scrub: true,
        },
        y: (i, target) =>
          -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none",
      });
    },
    {
      scope: mainRef,
    }
  );
  return mainRef;
};

export default useParallax;
