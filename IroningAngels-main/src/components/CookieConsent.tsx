import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Button from './Button';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentChoice = localStorage.getItem('cookie-consent');
    
    if (!consentChoice) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else if (consentChoice === 'accepted') {
      // User previously accepted, call clarity consent
      if (window.clarity) {
        window.clarity('consent');
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Call Microsoft Clarity consent
    if (window.clarity) {
      window.clarity('consent');
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    
    // Optionally disable Clarity tracking
    if (window.clarity) {
      window.clarity('stop');
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start flex-1">
                <Cookie className="w-6 h-6 text-primary mr-3 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We use cookies and similar technologies to improve your experience on our website, 
                    analyze site usage, and assist with marketing efforts. This includes Microsoft Clarity 
                    for analytics to help us understand how you interact with our site.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="secondary"
                  onClick={handleDecline}
                  className="text-sm px-4 py-2"
                >
                  Decline
                </Button>
                <Button
                  variant="primary"
                  onClick={handleAccept}
                  className="text-sm px-4 py-2"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;