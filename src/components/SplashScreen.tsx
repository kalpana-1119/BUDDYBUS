
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
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5 
        }}
        className="text-white flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            y: [0, -10, 0, -5, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <Bus size={100} className="mb-6 text-white filter drop-shadow-lg" />
        </motion.div>
        
        <motion.h1 
          className="text-5xl font-bold mb-3 tracking-wider"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          BuddyBus
        </motion.h1>
        <motion.div
          className="h-1 w-32 bg-white rounded mb-4"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
        <motion.p
          className="text-xl opacity-90 font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Track your ride in real-time
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 text-center text-white/70 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>XYZ College of Engineering</p>
        <p className="text-xs mt-1">Department of Computer Science and Engineering</p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
