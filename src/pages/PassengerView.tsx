
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Info, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarWrapper from '@/components/NavbarWrapper';
import BusCard from '@/components/BusCard';
import { buses, searchBusesByNumber, Bus } from '@/utils/busData';
import { useIsMobile } from '@/hooks/use-mobile';

const PassengerView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBuses, setFilteredBuses] = useState<Bus[]>(buses);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (searchQuery.length > 4) {
      setError('Bus numbers must be 4 digits or less');
      return;
    } else {
      setError('');
    }

    const results = searchBusesByNumber(searchQuery);
    setFilteredBuses(results);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setSearchQuery(value);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 bg-[url('/bus-background.jpg')] bg-cover bg-fixed bg-center bg-opacity-50">
      <NavbarWrapper />
      
      <div className="flex-1 container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-xl mx-auto mb-6 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-bold text-buddybus-dark mb-2 text-center">BuddyBus Tracker</h1>
          <p className="text-gray-600 text-center mb-6">Enter your bus number to track its location in real-time</p>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Enter 4-digit bus number"
              className="block w-full pl-10 pr-10 py-4 border border-gray-300 text-lg rounded-lg focus:ring-buddybus-blue focus:border-buddybus-blue shadow-sm"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X size={20} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        </motion.div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-buddybus-dark pl-4 bg-white/80 inline-block py-2 px-4 rounded-lg">
            {searchQuery ? 'Search Results' : 'Available Buses'}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredBuses.length > 0 ? (
              filteredBuses.map((bus) => (
                <motion.div
                  key={bus.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <BusCard bus={bus} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-10 text-center bg-white/80 backdrop-blur-sm rounded-lg shadow"
              >
                <p className="text-gray-500">No buses found matching "{searchQuery}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <footer className="bg-buddybus-blue text-white py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-medium">BuddyBus Tracker</p>
              <p className="text-sm text-white/80">A Project by the Computer Science and Engineering Department</p>
            </div>
            <div>
              <p className="text-white/80 text-sm">Service hours: 7:00 AM - 6:15 PM</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 text-center text-sm text-white/70">
            <p>Your College Name © {new Date().getFullYear()} | Developed as part of CSE Department's IoT Initiative</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PassengerView;
