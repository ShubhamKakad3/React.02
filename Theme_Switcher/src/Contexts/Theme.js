import React, { createContext, useContext } from "react"; //  2

export const TheneContext = createContext(                //  3.  default values provided
  {
    themeMode: "light",
    darktheme: () => {},
    lighttheme: () => {},
  }
);

export const ThemeProvider = TheneContext.Provider;        // 4
                                                           
export default function useTheme() {                       // 5    custom hook
  return useContext(TheneContext);
}


// cd Theme_Switcher               npm run dev
