import { useState, useRef } from 'react';

const timeouts = [];

const useNavigator = () => {
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

  return {
    navigatorState,
    slideNavigator,
  };
};

export default useNavigator;
