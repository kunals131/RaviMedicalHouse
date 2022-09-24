import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroImage from '../components/HeroImage';
import OffersComponent from '../components/OffersComponent';
import CategoryPreview from '../components/CategoryPreview';
import CategoryHome from '../components/ShopByCategory/CategoryHome';
import Sidebar from '../components/Sidebar';
import OrderPrescription from '../components/OrderPrescription';
import DekstopComponents from '../components/DekstopComponents';
import {useState} from 'react';
import cookie from 'cookie';
import HomeSlider from '../components/HomeSlider';
import TrackComponent from '../components/TrackComponent';



export default function Home() {

  return (
    <>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <HomeSlider/>
      <div className='lg:px-20'>
      <div className='hidden lg:block'>
      <DekstopComponents></DekstopComponents>
      </div>
      <OrderPrescription/>
      <TrackComponent/>
      <CategoryHome/>
      <CategoryPreview heading="Popular Products"/>
      <CategoryPreview heading="Seasonal Products"/>
      </div>
      <div className='hidden lg:block'>
        <div className='flex bg-primary mt-10 shadow-md'>
          <div className='flex-1 2xl:p-16 lg:p-12'>
          <div className='2xl:text-3xl lg:text-lg lg:font-normal text-white 2xl:font-semibold font-poppins'>Medicine at your Door Step{","}</div>
            <div className='2xl:text-3xl lg:text-lg text-white font-semibold 2xl:font-poppins'>from your favourite Online Pharmacy.</div>
            <div className='2xl:mt-16 lg:mt-8 text-white font-normal font-poppins'>Download App for free</div>
            <div className='flex space-x-2 mt-4'>
            <div>
                <Image
                  src="/footerImages/appstore.png"
                  height="45px"
                  width="140px"
                />
              </div>
              <div>
                <Image
                  src="/footerImages/playstore.png"
                  height="45px"
                  width="140px"
                />
              </div>
            </div>

          </div>
          <div className='h-auto w-[45vw]' style={{background : "url('/app.svg') center center/cover"}}>
            
        </div>
        </div>
      </div>

    </>
  )
}
