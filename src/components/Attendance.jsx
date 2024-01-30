"use client";

import Image from "next/image";
import WatsappLogo from "../../public/WatsappLogo";

const Attendance = () => {
  const WhatsAppMessage = () => {
    const phoneNumber = "2233057530";
    const message = encodeURIComponent("Hola, ¿cómo estás?"); // Reemplaza con tu mensaje

    const WhatsAppLink = `https://wa.me/${phoneNumber}&text=${message}`;

    // Redirige a WhatsApp
    window.location.href = WhatsAppLink;
  };

  return (
    <div className="flex flex-col items-center p-4 text-secondary">
      <WatsappLogo />
      <h2 className="font-bold mb-2">CONFIRMAR ASISTENCIA</h2>
      <p>Cuento con tu presencia</p>
      <p>Si confirmás por favor no faltes!!! 🙏</p>
      <div className="my-4">
        <button
          className="bg-secondary text-primary px-4 py-2 rounded-xl"
          onClick={WhatsAppMessage}
        >
          confirmar
        </button>
      </div>
      <div className="flex flex-col gap-4">
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
