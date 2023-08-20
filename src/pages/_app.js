import '@/styles/globals.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NProgress from "nprogress";
import Router from "next/router";
import Head from 'next/head';

// NProgress.configure({ showSpinner: false });

// Router.onRouteChangeStart = url => {
//   NProgress.start()
// }

// Router.onRouteChangeComplete = () => NProgress.done()

// Router.onRouteChangeError = () => NProgress.done()

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="canonical" href="https://www.vinayagawaterpurifiers.com/" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs    /nprogress/0.2.0/nprogress.min.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
}
