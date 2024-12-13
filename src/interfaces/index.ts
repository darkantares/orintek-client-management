export interface ClientsState {
    clients:Clients[];
    clientToUpdate: Clients | null;
    isDialogClientFormOpen:boolean;
    clientIdSelected:string;
}

export interface Clients {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone_number: string;
  addresses: Address[];
  created_at?: Date;
  updated_at?: Date;
}

export interface CreateClientsInput {
  firstName: string;
  lastName: string;
  email: string;
  phone_number: string;
  addresses?: Address[];
  id?: string | null;
}
  
export interface UpdateClientsInput {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone_number: string;
  addresses?: Address[];
};

export type DeleteClientsInput = {
  id: string;
};

export interface Address {
  id?:string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  created_at?: Date;
  updated_at?: Date;
  is_active?:boolean;
}