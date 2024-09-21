import { useEffect } from 'react';
import HeroSection from '../components/HeroSection'
import Services from './Services';
import Contact from './Contact';
import { useGlobalContext } from '../context'


const Home = () => {
 const {updateHomePage} = useGlobalContext();

 useEffect(() =>updateHomePage(), []);
  return (
    <>
  <HeroSection/>
  <Services/>
  <Contact/>
    </>
  )
}

export default Home
