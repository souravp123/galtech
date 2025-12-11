import React from 'react'
import Navbar from '../components/Navbar'
import MainBanner from '../components/MainBanner'
import Cards from '../components/Cards'
import Strip from '../components/Strip'
import Products from '../components/Products'
import Shades from '../components/Shades'
import BannerWithProduct from '../components/BannerWithProduct'
import Brands from '../components/Brands'
import PlumpingKits from '../components/PlumpingKits'
import PlumpHero from '../components/PlumpHero'
import SocialVideo from '../components/SocialVideo'
import Footer from '../components/Footer'


const Home = () => {

  return (

    <div className="home-page">
      {/* <MainBanner /> */}
      <Navbar />
      <Cards />
      <Strip />
      <Products />
      <Shades />
      <BannerWithProduct />
      <Brands />
      <PlumpingKits />
      <PlumpHero />
      <SocialVideo />
      
      <Footer />

    </div>
  )
}

export default Home