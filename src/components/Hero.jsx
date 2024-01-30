import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen bg-mobile bg-cover bg-center bg-fixed md:bg-desktop ">
      <h1 className="absolute top-[6%] left-1/2 transform -translate-x-1/2 text-7xl text-[#ffffff] opacity-90 animate-name_entrance font-windsong">
        Sofi
      </h1>
      <h2 className="absolute text-nowrap top-[19%] left-1/2 transform -translate-x-1/2 text-3xl text-[#ffffff] opacity-0 animate-title_entrance font-windsong">
        Mis 15 años
      </h2>
      <Image
        src="/double-down-64.png"
        width={64}
        height={64}
        alt="flecha abajo icono"
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[7%] animate-slide_down"
        priority
      />
    </div>
  );
};

export default Hero;
