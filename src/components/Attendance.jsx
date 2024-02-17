"use client";

import Image from "next/image";
import WatsappLogo from "../../public/WatsappLogo";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Attendance = () => {
  const WhatsAppMessage = () => {
    const phoneNumber = "2235357272";
    const message = encodeURIComponent("Hola, quiero confirmar!!!"); 

    const WhatsAppLink = `https://wa.me/${phoneNumber}&text=${message}`;

    // Redirige a WhatsApp
    window.location.href = WhatsAppLink;
  };

  const ref = useRef(null)
  const isInView = useInView(ref , { once: true })

  return (
    <div className="flex flex-col items-center p-4 text-secondary md:p-16 md:text-3xl">
      <WatsappLogo />
      <h2 className="font-bold mb-2 md:mb-8">CONFIRMAR ASISTENCIA</h2>
      <h2 className="font-bold font-josefina mb-2 md:mb-8">223-5357272</h2>
      <p>Cuento con tu presencia</p>
      <p className="md:mb-8">Si confirmás por favor no faltes!!! 🙏</p>
      <div className="my-4 md:mb-8">
        {/* <button
          className="bg-secondary text-primary px-4 py-2 rounded-xl"
          onClick={WhatsAppMessage}
        >
          confirmar
        </button> */}
      </div>
      <div ref={ref} className={`flex flex-col gap-4 md:grid md:grid-cols-2 ${isInView ? 'animate-name_entrance' : ''}`}>
        <Image
          src="/i2.jpeg"
          width={900}
          height={200}
          alt="foto sofi en la playa"
          priority
          className="rounded-xl"
        />
        <Image
          src="/i3.jpeg"
          width={900}
          height={200}
          alt="foto sofi en la playa"
          priority
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Attendance;
