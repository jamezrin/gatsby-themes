import React, { createContext } from 'react';
import useNavigator from '../hooks/useNavigator';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const { navigatorState, slideOutNavigator } = useNavigator();

  return (
    <UIContext.Provider value={{ navigatorState, slideOutNavigator }}>
      {children}
    </UIContext.Provider>
  );
};
