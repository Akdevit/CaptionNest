import React from 'react'
import Nav from '../components/layout/Nav'
import Hero from '../components/Hero'
import Catogories from '../components/Catogories'
import FAQ from '../components/FAQ '
import TrendingCaptions from '../components/TrendingCaptions'
import Footer from '../components/layout/Footer'
// import Genrate from '../components/Genrate'
const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Catogories />
            <FAQ/>
            <TrendingCaptions/>
            <Footer/>
            {/* <Genrate /> */}
            {/* <h1>Home Home</h1> */}

        </>
    )
}

export default Home
