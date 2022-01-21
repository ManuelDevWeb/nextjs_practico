import {useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Importando context
import { AppContext } from '@context/AppContext';
// Importando componentes
import { Menu } from '@components/Menu';
import { MyOrder } from '@containers/MyOrder';
// Importando estilos
import styles from '@styles/Header.module.scss';
// Importando imágenes
import menu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import logo from '@logos/logo_yard_sale.svg';

const Header = () => {
  // Destructurando elementos a utilizar del context
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <img src={menu.src} alt="menu" className={styles.menu}/>
        <div className={styles['navbar-left']}>
          <Link href="/" passHref>
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <Link href="/">Linkll</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={(styles['more-clickable-area'], styles['navbar-email'], styles.pointer)} onClick={() => toggleMenu()} aria-hidden="true">
              platzi@example.com
            </li>
            <li className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()} aria-hidden="true">
              <Image className={(styles['more-clickable-area'], styles.pointer)} src={shoppingCart} alt="shopping cart"/>
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export { Header };
