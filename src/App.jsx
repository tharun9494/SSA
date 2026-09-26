import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Office from './pages/Office/Office';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Support from './pages/Support/Support';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);

  // Scroll to top on every navigation
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // 600ms beautiful sweep
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="top-laser-loader"
            initial={{ width: '0%', opacity: 1 }}
            animate={{ width: '100%', opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              width: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
              opacity: { duration: 0.15 }
            }}
          />
        )}
      </AnimatePresence>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/office" element={<Office />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
          </Routes>
        </AnimatePresence>
      </main>
      {/* Conditionally render footer based on route if needed (e.g. no footer on home slider) */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

export default App;
