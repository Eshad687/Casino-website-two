import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../layouts/Layout';
import LoadingScreen from '../components/LoadingScreen';
import { useState, useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  
  return (
    <>
      {!loading ? <Layout>
        <Component {...pageProps} />
      </Layout> : (
        <LoadingScreen />
      )}
    </>
  )
}

