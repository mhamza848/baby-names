import React, { createContext, useContext } from "react";

import { names } from "../Data";


const NamesContext = createContext()

//2. Context provider
export function NamesProvider({children}) {
    return <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
}

export function useNames() {
    const context = useContext(NamesContext)
    if (!context) {
        throw new Error('You probably forgot a <NamesProvider> context Provider');
    }
    return context;
}