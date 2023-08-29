import '@/styles/globals.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NProgress from "nprogress";
import Router from "next/router";
import Head from 'next/head';

import { wrapper } from "../store/store";

import { Provider } from 'react-redux';
// import store from '@/store/store';

// NProgress.configure({ showSpinner: false });

// Router.onRouteChangeStart = url => {
//   NProgress.start()
// }

// Router.onRouteChangeComplete = () => NProgress.done()

// Router.onRouteChangeError = () => NProgress.done()

function App({ Component, pageProps, ...rest }) {
  const { store } = wrapper.useWrappedStore(rest);

  return <>
    <Head>
      <link rel="canonical" href="https://www.vinayagawaterpurifiers.com/" />
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-G9NWLEYEZP"></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-G9NWLEYEZP');`}}>

      </script>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}


export default wrapper.withRedux(App);
