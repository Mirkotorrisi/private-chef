import { useEffect, useState } from "react";

const useIsOnTop = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  const handleScroll = () => {
    setIsOnTop(!document.documentElement.scrollTop && !document.body.scrollTop);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isOnTop;
};

export default useIsOnTop;
