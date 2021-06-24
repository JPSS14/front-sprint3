import { useMessage } from "../../contexts/MessageContext";

export default function Message(){

    const {erro, location} = useMessage();
    console.log("seu eror", erro);
    return(
        <>
        {erro === "normal"?
        (<>
        
        </>):
        (
            <div className="alert">
            <p>Erro em {location}</p>
        </div>
        )}
        
        </>
    );
}