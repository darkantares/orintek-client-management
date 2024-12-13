
import { useContext, useEffect } from 'react';

import { Title } from "./components/Title/Title.styled";

import { EmptyClients } from "./components/EmptyClients";
import { DialogClientForm } from "./components/Dialog/DialogClientForm";
import { GlobalContext } from './context/context';
import { ListComponent } from "./components/List/List";
import useHttpRequest from './hooks/useHttpRequest';
import { Button, Container } from '@mui/material';

function App() {
  const {globalClients, error, loading, sendRequest } = useHttpRequest('GET', {}, {});
  const {setClients, showClientForm} = useContext(GlobalContext);

  useEffect(() => {
    sendRequest();    
  }, []);
  
  useEffect(() => {    
    setClients(globalClients);    
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
          globalClients.length === 0 ? <EmptyClients /> : <ListComponent />
        }
        
      </Container>
      
    </>
  );
}

export default App;
