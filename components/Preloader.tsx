// React
import { useState, useEffect } from "react";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`w-full h-full fixed bg-amber dark:bg-blue z-[999] flex justify-center items-center text-4xl font-semibold uppercase text-cultured dark:text-eerieBlack p-0 m-0 duration-500 ${
        loaded ? "bottom-full" : "bottom-0"
      }`}
    >
      <span className="animate-pulse">Loading...</span>
    </div>
  );
};

export default Preloader;
