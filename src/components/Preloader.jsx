import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="preloader-content">
        <motion.div
          className="preloader-logo-wrap"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src="/logo.png" alt="PS Designs" className="preloader-logo-img" />
        </motion.div>

        <motion.div 
          className="preloader-brand-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>PS DESIGNS</h2>
          <p>PARADISE FOR THOSE WHO CONNECT</p>
        </motion.div>

        {/* Progress bar and counter */}
        <div className="preloader-counter-wrap">
          <div className="preloader-progress-track">
            <motion.div 
              className="preloader-progress-fill" 
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="preloader-number">{percent}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
