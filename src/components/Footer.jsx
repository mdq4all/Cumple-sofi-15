import { useRef } from "react";
import StarsIcon from "../../public/StarsIcon";
import { useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center gap-x-4 p-4 text-center text-secondary font-josefina md:text-3xl md:py-8">
      <div className="py-2">
        <StarsIcon />
      </div>
      <p ref={ref} className={`${isInView ? "animate-textEntrance" : ""}`}>
        ¡Gracias por acompañarme en este momento tan importante! 💕
      </p>
      <div className="py-2">
        <StarsIcon />
      </div>
    </div>
  );
};

export default Footer;
