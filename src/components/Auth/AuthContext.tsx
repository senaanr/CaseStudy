import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username: string, password: string) => {
    if (username === 'user' && password === 'user123') {
      setIsLoggedIn(true);
      // Store login status in AsyncStorage
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
      } catch (error) {
        console.log('Failed to store login status:', error);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    // Remove login status from AsyncStorage
    try {
      await AsyncStorage.removeItem('isLoggedIn');
    } catch (error) {
      console.log('Failed to remove login status:', error);
    }
  };

  useEffect(() => {
    const loadLoginStatus = async () => {
      // Load login status from AsyncStorage
      try {
        const storedIsLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn === 'true') {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log('Failed to load login status:', error);
      }
    };

    loadLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
