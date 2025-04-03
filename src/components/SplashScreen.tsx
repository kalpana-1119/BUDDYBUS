
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bus } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Call onComplete after 3 seconds (total animation time)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-buddybus-blue z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white flex flex-col items-center"
      >
        <Bus size={80} className="mb-4 text-white" />
        <motion.h1 
          className="text-4xl font-bold mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          BuddyBus
        </motion.h1>
        <motion.p
          className="text-lg opacity-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Track your ride in real-time
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
