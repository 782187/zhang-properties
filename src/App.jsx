import './index.css';
import { useState } from 'react';
import SplashScreen from "./components/SplashScreen";
import Home from './pages/Home';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <Home />
      {showSplash && (
        <SplashScreen
          key="splash"
          onComplete={() => setShowSplash(false)}
        />
      )}
    </>
  );
}

export default App;
