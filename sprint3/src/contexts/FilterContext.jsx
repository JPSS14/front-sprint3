import { createContext, useContext } from "react";
import { useProducts } from "./ProductsContext";

export const FilterContext = createContext();

export function FilterContextProvider({ children }) {

    const {filter} = useProducts();

    function search(arg){
        console.log("args", arg);
        filter(arg);
    }

    return (
        <FilterContext.Provider
            value={{
                search
            }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    return useContext(FilterContext);
}