import React, { createContext, useContext } from "react";

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

const Provider = ({ store, children }) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
};

export default Provider;