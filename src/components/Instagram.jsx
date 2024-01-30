import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Instagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center bg-secondary text-primary p-4 text-center font-josefina md:text-3xl">
      <Image
        src="/instagramLogo.svg"
        width={128}
        height={128}
        alt="instagram logo"
      />
      <div ref={ref} className={`${isInView ? 'animate-textEntrance' : ''}`}>
        <p className="text-2xl mb-2 md:mb-8">@sofipognodeo</p>
        <p className="mb-2 md:mb-8">
          Seguime en mi cuenta de Instagram y etiquetame en tus fotos y videos.
        </p>
        <p className="mb-2 md:mb-8">
          Podrás ver todas las fotos de la fiesta desde mi cuenta!
        </p>
        <Link
          href="https://www.instagram.com/sofipognodeo"
          className="bg-primary text-secondary rounded-xl px-4 py-2 my-2"
          target="_blank"
        >
          ver mi instagram
        </Link>
      </div>
    </div>
  );
};

export default Instagram;
