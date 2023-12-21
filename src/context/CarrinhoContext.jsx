import { createContext } from "react";

export const CarrinhoContext = createContext();

export const CarrihnoProvider = ({ children }) => {
    return (
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    );
}