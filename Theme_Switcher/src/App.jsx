import { useState, useEffect } from "react"
import useTheme, { ThemeProvider } from "./Contexts/Theme"                                // 6
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"

function App() {
 const [themeMode ,setThemeMode] = useState('light')                            // 8

  const darktheme = () => {                                                      // 9
  setThemeMode("dark")
  }

  const lighttheme = () => {                                                      // 10    
  setThemeMode("light")
  }


  useEffect(() => {                                                              // 11
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])
  

  return (                                                                       // step 1
    <ThemeProvider value={{themeMode , darktheme, lighttheme}}>                   // 7
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       < ThemeBtn />
                    </div>

                   <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
          </div>
    </ThemeProvider>

  )
}

export default App
