import React, { useContext } from 'react';
import Image from 'next/image';
// Importando context
import { AppContext } from '@context/AppContext';
// Importando estilos
import styles from '@styles/OrderItem.module.scss';
// Importando imágenes
import imgClose from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
  // const {title, price, images}=product;
  // Destructurando elementos a utilizar del context
  const { removeFromCart } = useContext(AppContext);
  // Función para eliminar productos de la orden cuando demos click en el icono de la X
  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width={25} height={25}/>
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={imgClose} alt="close" onClick={() => handleRemove(product)} height={25} width={25}/>
    </div>
  );
};

export { OrderItem };
