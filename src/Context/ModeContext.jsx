import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext()





export default function DarkModeProvikder({ children }) {


    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark")))

    function toggleDarkMode() {
        setIsDark((dark) => !dark)


    }

    useEffect(() => {
        localStorage.setItem("isDark", JSON.stringify(isDark))
    }, [isDark])

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark")
            document.body.classList.remove("light")

        }
        else {
            document.body.classList.remove("dark")
            document.body.classList.add("light")

        }
    }, [isDark])




    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>{children}</DarkModeContext.Provider>
    )
}


function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error("context used outside provider")
    return context
}

export { useDarkMode, DarkModeProvikder }
