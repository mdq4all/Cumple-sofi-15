import Gift from "../../public/Gift";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Gifts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-primary text-secondary text-center font-josefina md:text-3xl md:py-8">
      <Gift />
      <div ref={ref} className={`${isInView ? 'animate-textEntrance': ''}`}>
        <p className="mt-4">
          Si deseás regalarme algo podés colaborar con mis sueños.
        </p>
        <p className="mt-4">
          En el salón dispondremos de una urna para depositar sobres. ¡Muchas
          gracias!
        </p>
      </div>
    </div>
  );
};

export default Gifts;
