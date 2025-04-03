
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  const handleSplashComplete = () => {
    setShowSplash(false);
    navigate('/select-user');
  };

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
    </div>
  );
};

export default Index;
