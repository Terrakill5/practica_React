import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="flex items-center justify-center bg-gris shadow-asi mx-2.5 mt-2.5 mb-12 h-96">
      <img
        className="w-auto h-full"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Imagen de ${props.imagen}`}
      />

      <div className="contenedor-texto-testimonio text-center p-2.5 font-normal leading-6">
        <p className="text-xl">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="text-xl mt-4 pb-8">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="text-lg text-justify">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
