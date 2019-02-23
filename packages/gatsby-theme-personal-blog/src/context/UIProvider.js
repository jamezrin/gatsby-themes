import React, { useState, useRef, createContext } from 'react';
import useNavigator from '../hooks/useNavigator';

export const UIContext = createContext();

export const UIConsumer = UIContext.Consumer;

const UIProvider = ({ children }) => {
  const [navigatorState, setNavigatorState] = useState(`featured`);

  const navigatorStateRef = useRef();
  navigatorStateRef.current = navigatorState;

  const slideNavigator = event => {
    event.preventDefault();
    if (navigatorState === `featured`) {
      setNavigatorState(`slideOut`);

      const timeout = setTimeout(function() {
        setNavigatorState(`outside`);
        clearTimeout(timeout);

        const timeout = setTimeout(function() {
          setNavigatorState(`slideUp`);
          clearTimeout(timeout);

          const timeout = setTimeout(function() {
            setNavigatorState(`aside`);
            clearTimeout(timeout);
          }, 300);
        }, 0);
      }, 500);
    }
  };

  return (
    <UIContext.Provider value={{ navigatorState, slideNavigator }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
