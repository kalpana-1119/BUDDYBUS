
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import { shouldShareLocation } from '@/utils/locationService';

const DriverLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setPin(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (phoneNumber.length !== 10) {
      setError('Phone number must be 10 digits');
      return;
    }
    
    if (pin.length !== 4) {
      setError('PIN must be 4 digits');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await login(phoneNumber, pin, 'driver');
      if (success) {
        navigate('/passenger');
        
        // Show notification about location sharing status
        const isInServiceHours = shouldShareLocation();
        if (isInServiceHours) {
          // Here you would show a notification that location sharing is active
          console.log('Location sharing is now active');
        } else {
          // Notification that location sharing will start during service hours
          console.log('Location sharing will start during service hours (7:00 AM - 6:15 PM)');
        }
      } else {
        setError('Invalid login credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar withBackButton={true} />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md"
        >
          <div className="bg-buddybus-orange p-6 text-white">
            <div className="flex items-center justify-center mb-4">
              <Bus size={48} />
            </div>
            <h2 className="text-2xl font-bold text-center">Driver Login</h2>
            <p className="text-white/80 text-center mt-2">
              Enter your phone number and PIN to continue
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-start">
                <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="10-digit phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-buddybus-orange focus:border-buddybus-orange"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-1">
                PIN
              </label>
              <input
                id="pin"
                type="password"
                value={pin}
                onChange={handlePinChange}
                placeholder="4-digit PIN"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-buddybus-orange focus:border-buddybus-orange"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center py-3 px-4 bg-buddybus-orange hover:bg-buddybus-orange/90 text-white font-medium rounded-lg transition-colors duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span>Log In</span>
                  <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </button>
            
            <p className="mt-4 text-sm text-gray-600 text-center">
              By logging in, you agree to share your location during service hours (7:00 AM - 6:15 PM)
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default DriverLogin;
