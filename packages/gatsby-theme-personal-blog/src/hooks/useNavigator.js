import { useState } from 'react';

let timeouts = [];

const useNavigator = () => {
  const [navigatorState, setNavigatorState] = useState(`featured`);

  const slideOutNavigator = event => {
    timeouts.forEach(timeout => clearTimeout(timeout));
    timeouts = [];

    if ([`featured`, `slidingIn`].includes(navigatorState)) {
      setNavigatorState(`slidingOut`);

      timeouts[0] = setTimeout(() => {
        setNavigatorState(`slidedDown`);
        clearTimeout(timeouts[0]);

        timeouts[1] = setTimeout(() => {
          setNavigatorState(`slidingUp`);
          clearTimeout(timeouts[1]);

          timeouts[2] = setTimeout(() => {
            setNavigatorState(`aside`);
            clearTimeout(timeouts[2]);
          }, 500);
        }, 0);
      }, 500);
    }
  };

  const slideInNavigator = event => {
    timeouts.forEach(timeout => clearTimeout(timeout));
    timeouts = [];

    if ([`aside`, `slidingUp`].includes(navigatorState)) {
      setNavigatorState(`slidingDown`);

      timeouts[0] = setTimeout(() => {
        setNavigatorState(`slidedOut`);
        clearTimeout(timeouts[0]);

        timeouts[1] = setTimeout(() => {
          setNavigatorState(`slidingIn`);
          clearTimeout(timeouts[1]);

          timeouts[2] = setTimeout(() => {
            setNavigatorState(`featured`);
            clearTimeout(timeouts[2]);
          }, 500);
        }, 0);
      }, 500);
    }
  };

  return {
    navigatorState,
    slideOutNavigator,
    slideInNavigator,
  };
};

export default useNavigator;
