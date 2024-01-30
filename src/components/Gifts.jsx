import Image from "next/image";
import Gift from "../../public/Gift";

const Gifts = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-primary text-secondary text-center font-josefina">
      <Gift />
      <p className="mt-4">Si deseás regalarme algo podés colaborar con mis sueños.</p>
      <p className="mt-4">
      En el salón dispondremos de una urna para depositar sobres. ¡Muchas gracias!
      </p>
    </div>
  );
};

export default Gifts;
