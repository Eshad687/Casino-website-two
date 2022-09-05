import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import MainInfo from '../components/MainInfo';
import Navbarr from './../components/Navbarr';

import { bets } from '../data/data';


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
  return (
    <div style={{backgroundColor:'#dddcdc'}}>
      <Head>
        <title>Create Next App</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main >

        <Banner />
        <MainInfo />
        <Cards casinos={casinos} />
        <Footer />
      </main>
    </div>)
}
