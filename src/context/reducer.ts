import { Clients } from "../interfaces";
import { ClientsState } from "../interfaces";

type  ClientsAction = { type: 'addProcedure', payload: Clients} |
                      { type: 'setClients', payload: Clients[]} |
                      { type: 'showClientForm'} |
                      { type: 'setClientForm', payload: Clients} |
                      { type: 'toggleClientAddresses', payload:string}

export  const ClientsReducer = (state:ClientsState, action:ClientsAction) =>{
       
    switch (action.type) {
        case "addProcedure":
            return {
                ...state,
                clients: [...state.clients, action.payload]
            }

        case "setClients":
            return {
                ...state,
                clients: [...action.payload]
            }

        case "showClientForm":
            return {
                ...state,
                isDialogClientFormOpen: !state.isDialogClientFormOpen,
            }

        case "setClientForm":
            return {
                ...state,
                clientToUpdate: action.payload
            }
            
        case "toggleClientAddresses":    
            const id = state.clientIdSelected !== action.payload ? action.payload : '';        
            return {
                ...state,
                clientIdSelected: id
            }

        default:
            return state;
}
}