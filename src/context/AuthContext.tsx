
import React, { createContext, useState, useContext, useEffect } from 'react';

type UserType = 'passenger' | 'driver' | 'owner' | null;

interface AuthContextType {
  userType: UserType;
  isAuthenticated: boolean;
  phoneNumber: string | null;
  driverPin: string | null;
  setUserType: (type: UserType) => void;
  login: (phoneOrEmail: string, pinOrPassword: string, type: UserType) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [driverPin, setDriverPin] = useState<string | null>(null);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const savedUserType = localStorage.getItem('userType') as UserType;
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    const savedPin = localStorage.getItem('driverPin');
    const savedAuth = localStorage.getItem('isAuthenticated') === 'true';

    if (savedUserType) setUserType(savedUserType);
    if (savedPhoneNumber) setPhoneNumber(savedPhoneNumber);
    if (savedPin) setDriverPin(savedPin);
    if (savedAuth) setIsAuthenticated(savedAuth);
  }, []);

  // Save auth state to localStorage when it changes
  useEffect(() => {
    if (userType) localStorage.setItem('userType', userType);
    else localStorage.removeItem('userType');

    if (phoneNumber) localStorage.setItem('phoneNumber', phoneNumber);
    else localStorage.removeItem('phoneNumber');

    if (driverPin) localStorage.setItem('driverPin', driverPin);
    else localStorage.removeItem('driverPin');

    localStorage.setItem('isAuthenticated', String(isAuthenticated));
  }, [userType, isAuthenticated, phoneNumber, driverPin]);

  // Mock login function - in a real app this would validate with a backend
  const login = async (phoneOrEmail: string, pinOrPassword: string, type: UserType): Promise<boolean> => {
    // Simple validation: For a driver, the PIN should be 4 digits
    if (type === 'driver') {
      if (pinOrPassword.length !== 4 || !/^\d+$/.test(pinOrPassword)) {
        return false;
      }
      setPhoneNumber(phoneOrEmail);
      setDriverPin(pinOrPassword);
    } 
    // For an owner, we would validate email and password
    else if (type === 'owner') {
      // Simple email format validation
      if (!phoneOrEmail.includes('@') || pinOrPassword.length < 6) {
        return false;
      }
    }

    setUserType(type);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setUserType(null);
    setIsAuthenticated(false);
    setPhoneNumber(null);
    setDriverPin(null);
    
    localStorage.removeItem('userType');
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('driverPin');
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ 
      userType, 
      isAuthenticated, 
      phoneNumber,
      driverPin,
      setUserType, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
