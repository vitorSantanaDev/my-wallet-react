import React, { createContext, useState, useContext } from "react"
import dark from "../styles/themes/dark"
import light from "../styles/themes/light"

interface Theme {
  title: string

  colors: {
    primary: string
    secondary: string
    tertiary: string

    white: string
    black: string
    gray: string

    sucess: string
    info: string
    warning: string
    link: string
  }
}

interface IThemeContext {
  toggleTheme(): void
  theme: Theme
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export function useTheme(): IThemeContext {
  const contextTheme = useContext(ThemeContext)
  return contextTheme
}

const ThemeProviderContext: React.FC = ({ children }) => {

  const [theme, setTheme] = useState<Theme>(() => {
    const themeSaved = window.localStorage.getItem('@my-wallet:theme')
    if(themeSaved) {
      return JSON.parse(themeSaved)
    } else {
      return dark
    }
  })

  const toggleTheme = () => {
    if(theme.title === 'dark') {
      setTheme(light)
      window.localStorage.setItem('@my-wallet:theme', JSON.stringify(light))
    } else {
      setTheme(dark)
      window.localStorage.setItem('@my-wallet:theme', JSON.stringify(dark))
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProviderContext