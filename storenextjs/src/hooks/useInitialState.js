import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
};

// Hook personalizado con las funcionalidades de la aplicación
const useInitialState = () => {
  // Manejando el estado del initialState
  const [state, setState] = useState(initialState);

  // Función para agregar productos al carro
  const addToCart = (payload) => {
    setState({
      // Conservando la información que hay en initialState
      ...state,
      // Conservando la información que hay en el cart del initialState y agregando el nuevo producto
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload],
    });
  };

  // Función para eliminar productos del carro
  const removeFromCart = (payload) => {
    setState({
      // Conservando la información que hay en initialState
      ...state,
      // Filtrando los items por id y asi poder guardar solo los que no coincidan con el id del producto a eliminar
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
  };
};

export { useInitialState };
