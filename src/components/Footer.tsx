const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-primary text-white">
      <section className="flex  items-center justify-around gap-10 md:gap-60 py-20">
        <div>veterinaria</div>
        <div>
          <ul className="flex flex-col items-start">
            <a href="">Inicio</a>
            <a href="">Servicios</a>
            <a href="">Acerca de</a>
            <a href="">ayuda</a>
          </ul>
        </div>
        <div>social part</div>
      </section>
      <section>
        <span className="text-[12px]">
          legal part of the site | 2021 &copy; All rights reserved.
        </span>
      </section>
    </footer>
  );
};

export default Footer;
