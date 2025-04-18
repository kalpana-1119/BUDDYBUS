
import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

interface NavbarWrapperProps {
  withBackButton?: boolean;
  withUserSwitch?: boolean;
}

// This wrapper ensures Navbar is always used within a Router context
const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ withBackButton, withUserSwitch }) => {
  // Check if we're already in a Router context by testing if window.location.pathname exists
  const isInRouterContext = typeof window !== 'undefined' && 
    window.location.pathname !== undefined;
  
  // Get current location
  const useLocationHook = () => {
    try {
      return useLocation();
    } catch (e) {
      return { pathname: '/' };
    }
  };
  
  const location = isInRouterContext ? useLocationHook() : { pathname: '/' };
  
  // Automatically show back button on all pages except home page
  const showBackButton = withBackButton !== undefined ? withBackButton : location.pathname !== '/passenger';
  
  // If we're already in a Router context, just render the Navbar
  if (isInRouterContext) {
    return <Navbar withBackButton={showBackButton} withUserSwitch={withUserSwitch} />;
  }
  
  // Otherwise, wrap it in a BrowserRouter
  return (
    <BrowserRouter>
      <Navbar withBackButton={showBackButton} withUserSwitch={withUserSwitch} />
    </BrowserRouter>
  );
};

export default NavbarWrapper;
