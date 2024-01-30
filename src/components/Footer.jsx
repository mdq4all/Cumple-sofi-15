import Image from "next/image";
import StarsIcon from "../../public/StarsIcon";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-x-4 p-4 text-center text-secondary">
      <div className="py-2">
        <StarsIcon />
      </div>
      <p>¡Gracias por acompañarme en este momento tan importante! 💕</p>
      <div className="py-2">
        <StarsIcon />
      </div>
    </div>
  );
};

export default Footer;
