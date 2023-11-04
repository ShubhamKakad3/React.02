import { useState, useEffect } from "react";

function useDarkMode() {
  // This hook helps you implement a dark mode toggle in your application.
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
export default useDarkMode;
// const [isDarkMode, setIsDarkMode] = useDarkMode();
