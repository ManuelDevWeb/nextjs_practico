import Head from 'next/head';

// Components
import { ProductList } from '@containers/ProductList';

export default function Home() {
  return (
    <>
      {/* Implementando el Head del archivo _document, para mejorar SEO */}
      <Head>
        <title>Checkout | Home</title>
      </Head>
      <ProductList />
    </>
  );
}
