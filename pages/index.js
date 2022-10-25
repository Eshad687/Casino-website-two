import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import MainInfo from '../components/MainInfo';
import Navbarr from './../components/Navbarr';

import { bets } from '../data/data';
import ProsHome from '../components/ProsHome';
import FindBestCasino from '../components/FindBestCasino';
import NeedToKnow from '../components/NeedToKnow';
import FAQ from '../components/FAQ';
import { useEffect } from 'react';


export const getStaticProps = async () => {
  // const bets = (await import("../assets/data/data.json")).default
  return {
    props: {
      casinos: bets,
    }
  }
}


export default function Home({ casinos }) {
  // console.log(casinos)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);
  return (
    <div >
      <Head>
        <title>Best Gamble Casinos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >

        <Banner />
        {/* <MainInfo /> */}
        <Cards casinos={casinos} />
        <ProsHome />
        <FindBestCasino />
        <NeedToKnow />
        <FAQ />
        {/* <Footer /> */}
      </main>
    </div>)
}
