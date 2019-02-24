import { useState } from 'react';

const useNavigator = () => {
  const [navigatorState, setNavigatorState] = useState(`featured`);

  const slideOutNavigator = event => {
    if (navigatorState === `featured`) {
      setNavigatorState(`slideOut`);

      const timeout01 = setTimeout(() => {
        setNavigatorState(`outside`);
        clearTimeout(timeout01);
      }, 500);

      const timeout02 = setTimeout(() => {
        setNavigatorState(`slideUp`);
        clearTimeout(timeout02);
      }, 550);

      const timeout03 = setTimeout(() => {
        setNavigatorState(`aside`);
        clearTimeout(timeout03);
      }, 1050);
    }
  };
  return {
    navigatorState,
    slideOutNavigator,
  };
};

export default useNavigator;
