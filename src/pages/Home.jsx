import Hero from '../components/Hero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/Dropdowns/ContactUs';
import Organisation from '../pages/Organisation';
import TataGotion from '../components/Dropdowns/PortfolioDropdownSubPages/TataGotion';
import SanyChakan from '../components/Dropdowns/PortfolioDropdownSubPages/SanyChakan';
import TataAsal from '../components/Dropdowns/PortfolioDropdownSubPages/TataAsal';
import WeBuild from '../components/Dropdowns/WhatWeDoSubPages/WeBuild';
import WeLease from '../components/Dropdowns/WhatWeDoSubPages/WeLease';
import WeMaintain from '../components/Dropdowns/WhatWeDoSubPages/WeMaintain';
import WeCanDeliverIn from '../components/WeCanDeliverIn';
import ScrollToTop from '../components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TataGotionCompleted from '../components/Dropdowns/CompletedProjectPages/TataGotionCompleted';
import SanyCompleted from '../components/Dropdowns/CompletedProjectPages/SanyCompleted';
import TataAsalCompleted from '../components/Dropdowns/CompletedProjectPages/TataAsalCompleted';
import TataToyoRadiator from '../components/Dropdowns/CompletedProjectPages/TataToyoRadiator';
import TataFicosa from '../components/Dropdowns/CompletedProjectPages/TataFicosa';
import AllProjects from '../pages/AllProjects';

const Home = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/organisation" element={<Organisation />} />

          <Route path="/dropdown/tata-gotion" element={<TataGotion/>}/>
          <Route path="/dropdown/sany-chakan" element={<SanyChakan/>}/>
          <Route path="/dropdown/tata-asal" element={<TataAsal/>}/>
          
          <Route path="/completed/tata-gotion" element={<TataGotionCompleted/>}/>
          <Route path="/completed/sany" element={<SanyCompleted/>}/>
          <Route path="/completed/tata-asal" element={<TataAsalCompleted/>}/>
          <Route path="/completed/tata-toyo-radiator" element={<TataToyoRadiator/>}/>
          <Route path="/completed/tata-ficosa" element={<TataFicosa/>}/>
          
          <Route path="/dropdown/webuild" element={<WeBuild/>}/>
          <Route path="/dropdown/welease" element={<WeLease/>}/>
          <Route path="/dropdown/wemaintain" element={<WeMaintain/>}/>

          <Route path="/we_can_deliver_in" element={<WeCanDeliverIn/>}/>

          <Route path="/all-projects" element={<AllProjects/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Home