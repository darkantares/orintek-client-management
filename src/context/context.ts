import { createContext } from "react";
import { ClientsState } from "../interfaces";
import { Clients } from "../interfaces";

export type ClientsContextProps = {
    clientsState:ClientsState;
    showClientForm: () => void;
    showClientAddresses: () => void;
    addProcedure: (client: Clients) => void;
    setClients: (client: Clients[]) => void;
}

export const GlobalContext = createContext<ClientsContextProps>({} as ClientsContextProps);
