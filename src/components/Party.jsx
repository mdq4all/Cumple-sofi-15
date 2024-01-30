"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const Party = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/goldenBalloons.jpg"
          width={1980}
          height={100}
          alt="fiesta"
          priority
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-josefina text-5xl text-[#ffffff] tracking-widest animate-party shadow-text">
          fiesta!!!
        </p>
      </div>
      <div className="px-4 py-6 text-center text-secondary font-josefina bg-primary">
        <p className="font-bold mb-2">
          ¡Prepárate para la fiesta del año! 🎉✨
        </p>
        <p className="mb-2">
          La cita es el <span className="font-bold">Viernes 23 de febrero</span>
          , desde las 21:30 hasta las 06:00 hs. Sí, ¡leíste bien! ¡Vamos a
          festejar hasta el amanecer!
        </p>
        <p className="mb-2">
          Nos encontraremos en{" "}
          <span className="font-bold">Janos Los Naranjos</span>, ubicado en RP
          88 KM 3300.
        </p>
        <p className="mb-2">
          ¿Te preguntas cómo llegar? ¡No te preocupes! Solo tienes que hacer
          clic en el botón de abajo y encontrarás las indicaciones para llegar.
        </p>
        <div className="my-4">
          <Link
            href="/maps"
            target="_blank"
            className="px-4 bg-secondary py-2 text-primary rounded-xl font-roboto"
          >
            como llegar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Party;
