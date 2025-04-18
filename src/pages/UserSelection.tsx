
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, User, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

const UserSelection = () => {
  const navigate = useNavigate();
  const { setUserType } = useAuth();

  const handleUserSelection = (type: 'passenger' | 'driver' | 'owner') => {
    setUserType(type);
    
    switch (type) {
      case 'passenger':
        navigate('/passenger');
        break;
      case 'driver':
        navigate('/driver-login');
        break;
      case 'owner':
        navigate('/owner-login');
        break;
    }
  };

  const userOptions = [
    {
      type: 'passenger' as const,
      title: 'Passenger',
      description: 'Track bus locations and find schedules',
      icon: User,
      color: 'bg-buddybus-blue',
      delay: 0.1,
    },
    {
      type: 'driver' as const,
      title: 'Driver',
      description: 'Share your location and manage your route',
      icon: Bus,
      color: 'bg-buddybus-orange',
      delay: 0.2,
    },
    {
      type: 'owner' as const,
      title: 'Owner',
      description: 'Manage your fleet and drivers',
      icon: Building2,
      color: 'bg-green-600',
      delay: 0.3,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[url('/bus-background.jpg')] bg-cover bg-center bg-fixed">
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-black/40">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome to BuddyBus
          </h1>
          <p className="text-white/90">Select how you want to use the app</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {userOptions.map((option) => (
            <motion.div
              key={option.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: option.delay, duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleUserSelection(option.type)}
            >
              <div className={`p-4 ${option.color} text-white`}>
                <option.icon size={36} />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <footer className="bg-white/90 backdrop-blur-sm py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-buddybus-dark">Your College Name</h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Department of Computer Science and Engineering</p>
              <p className="font-medium">Exploring the Future of Technology</p>
            </div>
            <p className="text-gray-500 text-xs mt-4">© 2025 BuddyBus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserSelection;
