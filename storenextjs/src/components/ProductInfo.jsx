import React from 'react';
import Image from 'next/image';

// Importando estilos
import '@styles/ProductInfo.scss';

// Importando imágenes
import imgAdd from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
      <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" height={240} width={240}/>
      <div className="ProductInfo">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className="primary-button add-to-cart-button">
          <Image src={imgAdd} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export { ProductInfo };
