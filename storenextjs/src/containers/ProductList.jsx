import React from "react";

// Componentes
import { ProductItem } from "@components/ProductItem";

// Custom hooks
import { useGetProducts } from "@hooks/useGetProducts";

// Styles
import styles from "@styles/ProductList.module.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  // Llamando el custom hook useGetProducts
  const products=useGetProducts(API);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
		  {
			  // Iterando sobre los productos
			  products.map((product)=>(
				  <ProductItem key={product.id} product={product}/>
			  ))
		  }
      </div>
    </section>
  );
};

export { ProductList };
