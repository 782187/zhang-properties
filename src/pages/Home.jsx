import Hero from '../components/Hero'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Clients from './Clients';
import Header from '../components/Header';
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
      <Clients/>
      
    </>
  )
}

export default Home
