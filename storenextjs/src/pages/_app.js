import Script from 'next/script';

// Components
import { Header } from '@components/Header';

// Context
import { AppContext } from '@context/AppContext';

// Custom hooks
import { useInitialState } from '@hooks/useInitialState';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    // Enviando el contexto a todos los componentes
    <AppContext.Provider value={initialState}>
      {/* Configuración para agregar Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J642G8S8SK" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J642G8S8SK');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
