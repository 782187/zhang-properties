import Hero from '../components/Hero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/Dropdowns/ContactUs';
import TataGotion from '../components/Dropdowns/PortfolioDropdownSubPages/TataGotion';
import SanyChakan from '../components/Dropdowns/PortfolioDropdownSubPages/SanyChakan';
import TataAsal from '../components/Dropdowns/PortfolioDropdownSubPages/TataAsal';
import WeBuild from '../components/Dropdowns/WhatWeDoSubPages/WeBuild';
import WeLease from '../components/Dropdowns/WhatWeDoSubPages/WeLease';
import WeMaintain from '../components/Dropdowns/WhatWeDoSubPages/WeMaintain';
import OurOccupiers from '../components/Dropdowns/WeWorkWithSubPages/OurOccupiers';
import Investors from '../components/Dropdowns/WeWorkWithSubPages/Investors';
import LandOwners from '../components/Dropdowns/WeWorkWithSubPages/LandOwners';
import VendorPartners from '../components/Dropdowns/WeWorkWithSubPages/VendorPartners';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact_us" element={<ContactUs />} />

          <Route path="/dropdown/tata-gotion" element={<TataGotion/>}/>
          <Route path="/dropdown/sany-chakan" element={<SanyChakan/>}/>
          <Route path="/dropdown/tata-asal" element={<TataAsal/>}/>
          
          <Route path="/dropdown/webuild" element={<WeBuild/>}/>
          <Route path="/dropdown/welease" element={<WeLease/>}/>
          <Route path="/dropdown/wemaintain" element={<WeMaintain/>}/>

          <Route path="/dropdown/ouroccupiers" element={<OurOccupiers/>}/>
          <Route path="/dropdown/investors" element={<Investors/>}/>
          <Route path="/dropdown/landowners" element={<LandOwners/>}/>
          <Route path="/dropdown/vendorpartners" element={<VendorPartners/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Home