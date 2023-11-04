import { useState, useEffect } from "react";

function useDebouncedInput(initialValue, delay) {
  // This hook helps you create a debounced input field for search functionality.
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [initialValue, delay]);

  return [value, setValue];
}
export default useDebouncedInput;
// const [searchValue, setSearchValue] = useDebouncedInput('', 300);
