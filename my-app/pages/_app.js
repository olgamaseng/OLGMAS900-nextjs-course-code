import Layout from '../Components/layout/Layout'
import '../styles/globals.css'
import Head from 'next/head'

 function App({ Component, pageProps }) {
  return ( <Layout>
  <Head>
    <meta name = 'viewport' content ='initial-scale=1.0, width=device-width' />
  </Head>
  <Component {...pageProps} />
  </Layout>
  )
}

export default App;