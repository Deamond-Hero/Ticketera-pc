import ClientCounter from '../components/ClientCounter';
import Hero from '../components/Hero';
import Instructions from '../components/Instructions';
import LandingInfo from '../components/LandingInfo';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <>
        <Hero></Hero>
        <Instructions/>
        <ClientCounter/>
        <LandingInfo/>
        <Reviews/>
        <Footer/>
        </>
    )
}


export default Landing