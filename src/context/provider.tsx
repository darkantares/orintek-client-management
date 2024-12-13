import { useReducer } from "react";
import { GlobalContext } from "./context";
import { ClientsState } from "../interfaces";
import { ClientsReducer } from "./reducer";
import { Clients } from "../interfaces";

const INITIAL_STATE:ClientsState = {
    clients: [],
    isDialogClientFormOpen: false,
    clientIdSelected: '',
    clientToUpdate: null
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GlobalProvider = ({ children }: Props) => {
    const [clientsState, dispatch] = useReducer(ClientsReducer, INITIAL_STATE)

    const showClientForm = () => {        
        dispatch({type:'showClientForm'})
    }

    const setClientToUpdate = (client: Clients) => {        
        dispatch({type:'setClientForm', payload:client})
    }

    const showClientAddresses = (id:string) => {        
        dispatch({type:'toggleClientAddresses', payload: id})
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
            setClientToUpdate,
            addProcedure,
            setClients
        }}>
            {children}
        </GlobalContext.Provider>
    );
};