
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Phone, ArrowLeft, RefreshCw } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface NavbarProps {
  withBackButton?: boolean;
  withUserSwitch?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ withBackButton = false, withUserSwitch = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { userType, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleUserSwitch = () => {
    logout();
    navigate('/select-user');
  };

  return (
    <nav className="bg-buddybus-blue text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {withBackButton ? (
              <button onClick={goBack} className="mr-4 p-2 rounded-full hover:bg-buddybus-blue/80">
                <ArrowLeft size={24} />
              </button>
            ) : null}
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold">BuddyBus</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/passenger" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-buddybus-blue/80">
              <div className="flex items-center gap-2">
                <Home size={18} />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-buddybus-blue/80">
              <div className="flex items-center gap-2">
                <Info size={18} />
                <span>About</span>
              </div>
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-buddybus-blue/80">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>Contact</span>
              </div>
            </Link>
            {withUserSwitch && (
              <button 
                onClick={handleUserSwitch}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-buddybus-blue/80"
              >
                <div className="flex items-center gap-2">
                  <RefreshCw size={18} />
                  <span>Switch</span>
                </div>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-buddybus-blue/80 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-buddybus-blue">
            <Link
              to="/passenger"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-buddybus-blue/80"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Home size={18} />
                <span>Home</span>
              </div>
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-buddybus-blue/80"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Info size={18} />
                <span>About</span>
              </div>
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-buddybus-blue/80"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>Contact</span>
              </div>
            </Link>
            {withUserSwitch && (
              <button 
                onClick={() => {
                  handleUserSwitch();
                  setIsOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-buddybus-blue/80"
              >
                <div className="flex items-center gap-2">
                  <RefreshCw size={18} />
                  <span>Switch</span>
                </div>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
