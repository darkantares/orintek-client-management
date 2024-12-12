import { useReducer } from "react";
import { GlobalContext } from "./context";
import { ClientsState } from "../interfaces";
import { ClientsReducer } from "./reducer";
import { Clients } from "../interfaces";

const INITIAL_STATE:ClientsState = {
    clients: [],
    isDialogClientFormOpen: false,
    isDialogClientAddressesOpen: false
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GlobalProvider = ({ children }: Props) => {
    const [clientsState, dispatch] = useReducer(ClientsReducer, INITIAL_STATE)

    const showClientForm = () => {        
        dispatch({type:'toggleClientForm'})
    }

    const showClientAddresses = () => {        
        dispatch({type:'toggleClientAddresses'})
    }

    const addProcedure = (client:Clients) =>{
        dispatch({type:"addProcedure", payload: client})
    }

    const setClients = (client:Clients[]) =>{
        dispatch({type:"setClients", payload: client})
    }
    
    return (
        <GlobalContext.Provider value={{
            clientsState,
            showClientForm,
            showClientAddresses,
            addProcedure,
            setClients
        }}>
            {children}
        </GlobalContext.Provider>
    );
};