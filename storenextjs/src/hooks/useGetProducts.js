import { useEffect, useState } from 'react';
import axios from 'axios';

// Hook personalizado para el llamado a la API
const useGetProducts = (API) => {
  // Manejando el estado products, el cual contiene el listado de productos
  const [products, setProducts] = useState([]);

  // Manejando el efecto que tendra este componente, llamado de API sólo una vez
  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProducts(response.data);
    }
    fetchData();
  }, [API]);

  return products;
};

export { useGetProducts };
