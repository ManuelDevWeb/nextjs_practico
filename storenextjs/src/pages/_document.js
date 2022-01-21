import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        {/* En Head se realizan algunas configuracón para SEO, etc */}
        <meta charSet="utf-8" />
      </Head>
      <body>
        {/* Contiene toda nuestra aplicación */}
        <Main />
        {/* Contiene todos los scripts que se generan a la hora de preparar el proyecto */}
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
