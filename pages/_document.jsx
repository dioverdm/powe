import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Pogo OS es un bot de Discord completo, fácil de usar, en el que confían millones de servidores de Discord de todo el mundo para gestionar, entretener y hacer crecer tu comunidad."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@pogo_os" />
          <meta name="twitter:creator" content="@pogo_os" />
          <meta property="og:url" content="https://www.pogoos.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pogo OS | Discord Bot Multipropósitos" />
          <link
            rel="icon"
            href="/img/logo.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Pogo OS es un bot de Discord completo, fácil de usar, en el que confían millones de servidores de Discord de todo el mundo para gestionar, entretener y hacer crecer tu comunidad."
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Pogo OS" />
          <meta property="og:locale" content="es_ES" />
          <meta
            property="og:site_name"
            content="Pogo OS"
          />
          <meta name="theme-color" content="#6108dd" />
          <meta name="google-adsense-account" content="ca-pub-8516954719707875" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
