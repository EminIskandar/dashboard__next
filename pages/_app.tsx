import type { AppProps } from 'next/app'  
import  Head  from 'next/head';
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Provider } from 'react-redux'
import store from './../store/store'

function App({ Component, pageProps }: AppProps) { 
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/d2f1f37fb8.js"></script>
    </Head>
    <Provider store = {store}>
      <Component {...pageProps} />
    </Provider>  
    </>
  )
}

export default App
