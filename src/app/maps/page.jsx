"use client"

const index = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center gap-4 font-josefina  text-secondary bg-primary overflow-hidden ">
      <h3 className="text-3xl">Janos Los Naranjos</h3>
      <h4>RP 88 KM 3300</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3143.6138600975505!2d-57.636986761660275!3d-38.0094663079492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x9584d993fcdadd17%3A0x8b10e345910c4995!2sJano&#39;s%20Los%20Naranjos%2C%20Ruta%20Provincial%2088%2C%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!3m2!1d-38.00911!2d-57.633252399999996!4m3!3m2!1d-38.0090605!2d-57.6332209!5e0!3m2!1ses-419!2sar!4v1706485990141!5m2!1ses-419!2sar"
        width="400"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <button
        className="px-4 py-2 bg-secondary text-primary rounded-md"
        onClick={window.close}
      >
        cerrar
      </button>
    </div>
  );
};

export default index;
