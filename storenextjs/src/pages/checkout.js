import React, {useContext} from 'react';
import Head from 'next/head';
// Context
import { AppContext } from '@context/AppContext';

// Importando componentes
// import { OrderItem } from '@components/OrderItem';

// Importando estilos
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  // Destructurando elementos a utilizar del context
  const {
    state: { cart }
  } = useContext(AppContext);

  return (
    <>
      {/* Implementando el Head del archivo _document, para mejorar SEO */}
      <Head>
        <title>Checkout | StoreNext</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles['order']}>
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          {/* {
            cart.map((item, index) => (
              <OrderItem
                key={index}
                item={item}
              />
            ))
          } */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
