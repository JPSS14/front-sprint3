import { createContext, useContext, useState } from "react";
import { UtilService } from "../services/UtilService";
import { useMessage } from "./MessageContext";

export const ProductsContext = createContext();

export function ProductsContextProvider({children}){

    const [products, setProducts] = useState([]);
    const [localProducts, setLocalProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    const {errorMessage} = useMessage();

    let aux = [];
    let aux2 = [];

    function findProducts(){
        UtilService("products")
        .then(t => {
            if(!t.ok){
                errorMessage("teste", "products");
                throw Error(t.error);
            }
            errorMessage("normal");
            return t.json();
        })
        .then(data => {
            data.products.map((v) => {
                return aux.push(v);
            })
            setProducts(aux);
            setLocalProducts(aux);

            data.filters.map((v) => {
                return aux2.push(v);
            })
            setFilters(aux2);
        }).catch(data => console.log("Erro", data));
    }

    function filter(arg){
        if(arg === ""){
            setProducts(localProducts);
        }else{
            const result = localProducts.filter(p => p.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1);
            // console.log("filtro", teste);
            setProducts(result);
        }
        
    }

    return(
        <ProductsContext.Provider
            value={{
                findProducts,
                products,
                filters,
                filter
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export const useProducts = () => {
    return useContext(ProductsContext);
}