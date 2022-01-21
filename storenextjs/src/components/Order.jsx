import React from "react";
import Image from "next/image";

// Importando estilos
import "@styles/Order.scss";

// Importando imágenes
import imgFlecha from '@icons/flechita.svg';

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={imgFlecha} alt="arrow" height={50} width={50} />
    </div>
  );
};

export { Order };
