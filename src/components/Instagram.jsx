import Image from "next/image";
import Link from "next/link";

const Instagram = () => {
  return (
    <div className="flex flex-col items-center bg-secondary text-primary p-4 text-center font-josefina">
      <Image
        src="/instagramLogo.svg"
        width={128}
        height={128}
        alt="instagram logo"
      />
      <p className="text-2xl mb-2">@sofipognodeo</p>
      <p className="mb-2">
        Seguime en mi cuenta de Instagram y etiquetame en tus fotos y videos.
      </p>
      <p>Podrás ver todas las fotos de la fiesta desde mi cuenta!</p>
      <Link
        href="https://www.instagram.com/sofipognodeo"
        className="bg-primary text-secondary rounded-xl px-4 py-2 my-2"
        target="_blank"
      >
        ver mi instagram
      </Link>
    </div>
  );
};

export default Instagram;
