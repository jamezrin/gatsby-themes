import { useState, useEffect } from 'react';
import { navigate } from 'gatsby';

let timeouts = [];

const useNavigator = ({ location }) => {
  const [navigatorState, setNavigatorState] = useState(
    setInitialState(location)
  );

  function setInitialState() {
    if (location.pathname === '/') {
      return `featured`;
    } else {
      return `aside`;
    }
  }

  useEffect(() => {
    if (location.pathname === '/' && navigatorState !== `featured`) {
      setNavigatorState(`featured`);
    }

    if (location.pathname !== '/' && navigatorState === `featured`) {
      setNavigatorState(`aside`);
    }
  }, [location]);

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
        }, 50);
      }, 500);
    }
  };

  const slideInNavigator = event => {
    if (event) {
      event.preventDefault();
    }

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
            navigate('/');
          }, 500);
        }, 50);
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
