import { Clients } from "../interfaces";
import { ClientsState } from "../interfaces";

type  ClientsAction = { type: 'addProcedure', payload: Clients} |
                      { type: 'setClients', payload: Clients[]} |
                      { type: 'toggleClientForm'} |
                      { type: 'toggleClientAddresses'}

export  const ClientsReducer = (state:ClientsState, action:ClientsAction) =>{
    console.log(action.type);
    
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

        case "toggleClientForm":
            console.log(state.isDialogClientFormOpen);
            
            return {
                ...state,
                isDialogClientFormOpen: !state.isDialogClientFormOpen
            }
            
        case "toggleClientAddresses":            
            return {
                ...state,
                isDialogClientAddressesOpen: !state.isDialogClientAddressesOpen
            }

        default:
            return state;
}
}