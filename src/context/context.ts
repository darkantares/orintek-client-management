import { createContext } from "react";
import { ClientsState } from "../interfaces";
import { Clients } from "../interfaces";

export type ClientsContextProps = {
    clientsState:ClientsState;
    showClientForm: () => void;
    showClientAddresses: (id:string) => void;
    setClientToUpdate: (client: Clients) => void;
    addProcedure: (client: Clients) => void;
    setClients: (client: Clients[]) => void;
}

export const GlobalContext = createContext<ClientsContextProps>({} as ClientsContextProps);
