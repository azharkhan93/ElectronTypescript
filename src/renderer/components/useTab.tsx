import { useEffect } from 'react';

const TabGroup = require('electron-tabs');

const useTabGroup: React.FC = () => {
  useEffect(() => {
    const tabGroup = new TabGroup();
    return () => {
      // Clean up when the component unmounts
      tabGroup.close();
    };
  }, []);

  return null; // You can return null or any other JSX element here
};

export default useTabGroup;



