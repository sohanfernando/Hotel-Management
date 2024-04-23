import { Dispatch, SetStateAction, createContext } from "react";

type THemeContextType = {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const themeContext = createContext<THemeContextType>({
    darkTheme: false,
    setDarkTheme: () => null,
});

export default themeContext;