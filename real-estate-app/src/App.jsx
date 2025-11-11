import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import PropertyGallery from './components/PropertyGallery';
import ContactUs from './components/Dropdowns/ContactUs';
import './styles/HeroSection.css';
import './styles/PropertyGallery.css';
import './styles/ContactUs.css';

const App = () => {
    return (
        <Router>
            <div>
                <HeroSection />
                <Switch>
                    <Route path="/" exact component={PropertyGallery} />
                    <Route path="/contact" component={ContactUs} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;