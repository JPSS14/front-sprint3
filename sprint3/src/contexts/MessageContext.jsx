import { createContext, useContext, useState } from "react";

export const MessageContext = createContext();

export function MessageContextProvider({ children }) {

    const [erro, setErro] = useState("normal");
    const [location, setLocation] = useState("");

    function errorMessage(msg, location){
        setErro(msg);
        setLocation(location);
    }

    return (
        <MessageContext.Provider
            value={{
                errorMessage,
                erro,
                location
            }}>
            {children}
        </MessageContext.Provider>
    )
}

export const useMessage = () => {
    return useContext(MessageContext);
}