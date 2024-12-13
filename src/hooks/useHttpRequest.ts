import { useState, useCallback, useContext } from 'react';
import { GlobalContext } from '../context/context';
import { Clients } from '../interfaces';

function useHttpRequest(method: string, headers = {}, body = {}) {
  const { clientsState, setClients } = useContext(GlobalContext);
  const { clients: globalClients } = clientsState; // Evita conflicto con la variable `clients` local

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendRequest = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/client`, {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
        body: method === 'POST' || method === 'PUT' ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData:any = await response.json();

      switch (method) {
        case 'GET':
          setClients && setClients(responseData || []);
          break;
        // case 'POST':
        //   const data:Clients[] = [...globalClients, ...responseData ]
        //   setClients && setClients(data);
        //   break;
        // case 'PUT':
        //   const updatedClients = globalClients.map((client) =>
        //     client.id === responseData.id ? responseData : client
        //   );
        //   setClients(updatedClients);
        //   break;
        // case 'DELETE':
        //   const deletedClient = globalClients.filter(client => client.id !== responseData.id)
        //   setClients && setClients(deletedClient);
        //   break;
        default:
          break;
      }
      
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [method, headers, body, setClients]);

  return { sendRequest, globalClients, error, loading };
}

export default useHttpRequest;
