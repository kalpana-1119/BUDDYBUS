import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

interface NavbarWrapperProps {
  withBackButton?: boolean;
  withUserSwitch?: boolean;
}

// This wrapper ensures Navbar is always used within a Router context
const NavbarWrapper: React.FC<NavbarWrapperProps> = (props) => {
  // Check if we're already in a Router context by testing if window.location.pathname exists
  const isInRouterContext = typeof window !== 'undefined' && 
    window.location.pathname !== undefined;

  // If we're already in a Router context, just render the Navbar
  if (isInRouterContext) {
    return <Navbar {...props} />;
  }
  
  // Otherwise, wrap it in a BrowserRouter
  return (
    <BrowserRouter>
      <Navbar {...props} />
    </BrowserRouter>
  );
};

export default NavbarWrapper;
