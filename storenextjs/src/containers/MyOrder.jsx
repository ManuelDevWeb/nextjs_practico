import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Importando context
import { AppContext } from '@context/AppContext';

// Importando componentes
import { OrderItem } from '@components/OrderItem';

// Importando imágenes
import imgArrow from '@icons/flechita.svg';

// Importando estilos
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
  // Destructurando elementos a utilizar del context
  const {
    state: { cart },
    toggleOrder
  } = useContext(AppContext);

  // Función para calcular el valor total a pagar
  const sumTotal = () => {
    const reducer = (acumulator, currentProduct) => acumulator + currentProduct.price;

    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['MyOrder-container']}>
        <div className={styles['title-container']}>
          <Image className={(styles['more-clickable-area'], styles.pointer)} src={imgArrow} alt="arrow" onClick={() => toggleOrder()} height={15} width={10}/>
          <p className={styles.title}>My order</p>
        </div>
        <div className={styles['my-order-content']}>
          <div className={styles['my-orders']}>
            {
              // Iterando sobre los elementos que hay en el cart del initialState
              cart.map((product) => (
                <OrderItem product={product} key={`orderItem-${product.id}`} />
              ))
            }
          </div>
          <div className={styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <Link className={styles['primary-button']} href="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export { MyOrder };
