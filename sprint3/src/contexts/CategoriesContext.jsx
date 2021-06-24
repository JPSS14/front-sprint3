import { createContext, useContext, useState } from "react";
import { UtilService } from "../services/UtilService";
import { useMessage } from "./MessageContext";

export const CategoriesContext = createContext();

export function CategoriesContextProvider ({ children }) {

    const[all, setAll] = useState([]);
    const[current, setCurrent] = useState([]); 

    const {errorMessage} = useMessage();

    let aux = [];
    let aux2 = [];

    function findCategories(){
        UtilService("categories")
        .then(r => {
            if(!r.ok){ // se ele não estiver funcionando ele ativa o erro
                errorMessage("teste", "categories");
                throw Error(r.error);
            }
            errorMessage("normal");
            return r.json();
        })
        .then(data => {
            
            data.all.map((v) => {
                return aux.push(v);
            })
            setAll(aux);

            data.current.map((v) => {
                return aux2.push(v);
            })
            setCurrent(aux2);
        }).catch(data => console.log("Erro", data));
        
        // console.log("aux", aux, all, current);
        
    }

    return (
        <CategoriesContext.Provider
            value={{
                findCategories,
                all,
                current
            }}>
            {children}
        </CategoriesContext.Provider>
    );
}



export default CategoriesContextProvider;

export const useCategories = () => {
    return useContext(CategoriesContext);
}