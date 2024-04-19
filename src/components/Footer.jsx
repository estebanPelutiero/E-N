import React from "react";
import { Link } from "react-scroll";
import LogoFooter from "../assets/logoFooter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleReservasClick = () => {
    // Reemplaza 'XXXXXXXXXX' con tu número de WhatsApp y 'Reserva' con tu mensaje predefinido
    window.location.href = "https://wa.me/+541123930489";
  };

  return (
    <footer id="footer" className="w-full bg-black">
      <section className="mx-auto px-4 md:px-8 lg:px-0 py-14 lg:max-w-[1120px] font-poppins flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
        <div>
          <figure>
            <a title="Estilo Nápoles" href="#">
              <img className="w-52 lg:w-64" src={LogoFooter} alt="" />
            </a>
          </figure>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 text-white text-center lg:text-start">
          <div className="border-b-[1px] border-t-[1px] border-white/15 lg:p-0 pt-6 pb-4 lg:border-0">
            <h3 className="bavi mb-3 text-xl">Navegacion</h3>
            <ul className="text-sm">
              <li className="mb-4 hover:text-blue duration-200 ease-in-out">
                <Link to="home" smooth={true} title="Home" href="#">
                  Home
                </Link>
              </li>
              <li className="mb-4 hover:text-blue duration-200 ease-in-out">
                <Link to="about" smooth={true} title="Nosotros" href="#">
                  Nosotrxs
                </Link>
              </li>
              <li className="mb-4 hover:text-blue duration-200 ease-in-out">
                <Link to="menu" smooth={true} title="Menú" href="#">
                  Menú
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="bavi mb-4 text-xl">Visítanos</h3>
            <p className="text-sm mb-6">
              Av. Ameghino 598, Campana, Bs As. <br /> (Está el Diego pintado en
              la esquina)
            </p>
            <p className="text-blue mb-6">
              Teléfono: <a className="hover:text-white duration-200 ease-in-out" href="tel:+54123456789">+54 11 2393-0489</a>
            </p>
            <div className="flex flex-row justify-center lg:justify-start gap-5 lg:gap-3">
              <a
                href="https://twitter.com/EstiloNapoles"
                target="_blank"
                className="mb-2 lg:mb-0 lg:mr-4"
              >
                <FontAwesomeIcon className="hover:text-blue duration-200 ease-in-out" icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/estilonapoles.campana/?hl=en"
                target="_blank"
              >
                <FontAwesomeIcon className="hover:text-blue duration-200 ease-in-out" icon={faInstagram} size="2x" />
              </a>
            </div>
            <button
              onClick={handleReservasClick}
              className="animate-bounce bg-white text-blue text-sm px-4 py-2 rounded-lg font-medium hover:bg-white/90 duration-200 ease-in-out mt-6"
            >
              Reservas
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
