import '@/styles/globals.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';


export default function App({ Component, pageProps }) {

  const isProduction = process.env.NODE_ENV === 'production';

  return <>
    <Head>
      <link rel="canonical" href="https://www.vinayagawaterpurifiers.com/" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
      {isProduction && <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7V4RFVQ');
`}} />}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
    </Head>
    {isProduction && <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7V4RFVQ"
      height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>}
    <Component {...pageProps} />
  </>
}
