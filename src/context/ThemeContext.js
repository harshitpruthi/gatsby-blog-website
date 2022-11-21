import React, {
  useEffect,
  useState,
} from 'react';

const defaultState = {
    dark: false,
    toggleDark: () => { },
}

const ThemeContext = React.createContext(defaultState)

const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true


const ThemeProvider = (props) => {
    const { children } = props;
    const [dark, setDarkMode] = useState(false);

    const toggleDark = () => {
        let darkMode = !dark
        localStorage.setItem("dark", JSON.stringify(darkMode))
        setDarkMode(darkMode)
    }

    useEffect(() => {
        const lsDark = JSON.parse(localStorage.getItem("dark"))

        if (lsDark) {
            setDarkMode(lsDark)
        } else if (supportsDarkMode()) {
            setDarkMode(true);
        }
    }, [])

    return (
        <ThemeContext.Provider
            value={{
                dark,
                toggleDark: toggleDark,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext

export { ThemeProvider };