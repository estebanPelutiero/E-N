import React from "react";
import Layout from "./Layout";
import AboutPic1 from "../assets/imgs/1.jpg";
import AboutPic2 from "../assets/imgs/2.png";
import AboutPic3 from "../assets/imgs/3.jpg";
import AboutPic4 from "../assets/imgs/4.jpg";

const About = () => {
  return (
    <>
      <Layout
        id="about"
        className={
          "flex flex-col lg:flex-row items-center justify-between pb-24"
        }
      >
        <figure className="w-full h-full lg:w-[45%] flex justify-center">
          <div className="parent">
            <div className="div1">
              <img
                className="rounded-lg shadow-xl w-full h-full object-cover"
                src={AboutPic1}
                alt=""
              />
            </div>
            <div className="div2">
              <img
                className="rounded-lg shadow-xl w-full h-full object-cover"
                src={AboutPic3}
                alt=""
              />
            </div>
            <div className="div3">
              <img
                className="rounded-lg shadow-xl w-full h-full object-cover"
                src={AboutPic4}
                alt=""
              />
            </div>
            <div className="div4">
              <img
                className="rounded-lg shadow-xl w-full h-full object-cover"
                src={AboutPic2}
                alt=""
              />
            </div>
          </div>
        </figure>
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl lg:text-7xl text-blue bavi mb-4">Nosotrxs</h2>
          <p className="text-gray">
            Nuestras pizzas, elaboradas a partir de un prefermento llamado Biga,
            son una fusión de las culturas italiana y argentina. Con una masa de
            alta hidratación y fermentada entre 24 y 48 horas, incorporamos
            sabores argentinos para crear la pizza italoargentina, utilizando un
            proceso 100% artesanal pero con los gustos y las cantidades que
            caracterizan nuestra tierra.
          </p>
          <p className="text-gray">
            Todo lo que hacemos es completamente artesanal y del día. Estiramos,
            armamos y horneamos a la vista.
          </p>
          <p className="text-gray">
            Nuestra cocina está abierta, rodeando el horno de barro que es el
            centro de nuestro espacio, para que puedan disfrutar de la
            experiencia de comer en la barra de madera mientras nos ven cocinar;
            es un buen espectáculo: nosotros siendo nosotros.
          </p>
          <p className="text-gray">
            También pueden optar por sentarse afuera, en la vereda, o en el
            patio trasero, donde encontrarán una huerta y calefacción.
          </p>
          <p className="text-gray">
            Nos encanta celebrar nuestra identidad con eventos que resaltan
            nuestra pasión futbolera y la hermandad argentina, honrando las
            tradiciones de nuestros antepasados, respetando la sobremesa y
            jugando a las cartas con un postre de por medio.
          </p>
          <p className="text-gray">
            Creamos un espacio donde los niños pueden pintar y los adultos
            pueden elegir qué música escuchar, para que los artistas puedan
            venir a dejar su arte entre nuestras paredes y compartir momentos
            llenos de amigos y buena comida.
          </p>
          <p className="text-gray">¡Bienvenidos a nuestro hogar!</p>
        </div>
      </Layout>
      <div className="z-50 bg-[url('./assets/bordeNegro.svg')] w-full h-6 bg-no-repeat rotate-180 -mt-1"></div>
    </>
  );
};

export default About;
