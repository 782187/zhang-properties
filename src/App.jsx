import './index.css';
import { useState } from 'react';
import SplashScreen from "./components/SplashScreen";
import Home from './pages/Home';
import { AnimatePresence } from "framer-motion";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [exitSplash, setExitSplash] = useState(false);

  return (
    <AnimatePresence>
      {showSplash ? (
        <SplashScreen
          key="splash"
          onComplete={() => {
            setExitSplash(true);
            setTimeout(() => setShowSplash(false), 800); 
          }}
          isExiting={exitSplash}
        />
      ) : (
        <Home key="home" />
      )}
    </AnimatePresence>
  );
}

export default App;
