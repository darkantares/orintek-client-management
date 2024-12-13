
import { useContext, useEffect } from 'react';

import { Title } from "./components/Title/Title.styled";

import { EmptyClients } from "./components/EmptyClients";
import { DialogClientForm } from "./components/Dialog/DialogClientForm";
import { GlobalContext } from './context/context';
import { ListComponent } from "./components/List/List";
import { Button, Container } from '@mui/material';
import useGetClients from './hooks/useGetClients';

function App() {
  // const {globalClients, error, loading, sendRequest } = useHttpRequest('GET', {}, {});
  const {clients} = useGetClients('client')
  const {setClients, showClientForm} = useContext(GlobalContext);
  
  useEffect(() => {    
    setClients(clients);    
  }, []);

  return (
    <>
      <DialogClientForm />

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column', // Opcional: organiza elementos en columna si tienes más de uno.
          alignItems: 'center', // Centra horizontalmente.
          height: '100vh', // Asegúrate de que el contenedor ocupe toda la altura de la pantalla.
        }}
      >
        <Container sx={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between', maxWidth: '940px', alignItems: 'center' }}>
          <Title>Clientes</Title>
          <Button
              type="button"
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={showClientForm}
          >
              + Agregar Cliente
          </Button>
        </Container>
        
        {
          clients.length === 0 ? <EmptyClients /> : <ListComponent />
        }
        
      </Container>
      
    </>
  );
}

export default App;
