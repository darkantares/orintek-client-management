
import { useContext, useEffect } from 'react';

import { ContainerTitle, Title } from "./components/Title/Title.styled";

import { EmptyClients } from "./components/EmptyClients";
import { Container } from "./components/Global.styled";
import { DialogClientForm } from "./components/Dialog/DialogClientForm";
import { ListComponent } from "./components/List/List";
import { GlobalContext } from './context/context';

import clientsData from './clients.json';

function App() {

  const {clientsState, setClients} = useContext(GlobalContext);
  const {clients} = clientsState;

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
      try {        
        const validClients: any[] = clientsData.data.map(item => ({
          ...item,
          addresses: item.addresses.map((address:any) => ({
              ...address,
              created_at: new Date(address.created_at),
              updated_at: new Date(address.updated_at),
          }))
        }));

        setClients(validClients);
        
      } catch (err) {
        console.log('error fetching todos');
      }
  }

  return (
    <>
      <DialogClientForm />

      <Container>
        <ContainerTitle>
          <Title>Clientes</Title>
        </ContainerTitle>
        
        {
          clients.length === 0 ? <EmptyClients /> : <ListComponent />
        }
        
      </Container>
      
    </>
  );
}

export default App;
