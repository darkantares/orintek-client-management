export interface ClientsState {
    clients:Clients[];
    isDialogClientFormOpen:boolean;
    isDialogClientAddressesOpen:boolean;
}

export interface Clients {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone_number: string;
  addresses?: Address[];
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
  street_address: string;
  type?:"residential" |"commercial" |"other";
  city: string;
  state: string;
  zip_code: string;
  country: string;
  created_at: Date;
  updated_at: Date;
  is_active:boolean;
}