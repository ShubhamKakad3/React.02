import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {         // This hook allows you to easily read and write data to the browser's local storage.
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage

// const [name, setName] = useLocalStorage('name', 'John');
