import '@/styles/globals.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="canonical" href="https://www.vinayagawaterpurifiers.com/" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs    /nprogress/0.2.0/nprogress.min.css"
      />
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7V4RFVQ');
`}} />

    </Head>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7V4RFVQ"
      height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
    <Component {...pageProps} />
  </>
}
