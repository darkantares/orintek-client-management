import { useState, useContext } from 'react';
import { GlobalContext } from '../context/context';
import { Clients } from '../interfaces';

interface UseUpdateClient<T> {
  updateClient: (id: string, body: T) => Promise<void>;
  error: string | null;
  loading: boolean;
}

function useUpdateClient<T>(url: string): UseUpdateClient<T> {
  const { clientsState: { clients }, setClients } = useContext(GlobalContext);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const updateClient = async (id: string, body: T) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/${url}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const updatedClient = await response.json();

      // Actualiza el estado global con el cliente actualizado
      const updatedClients = clients?.map(client =>
        client.id === updatedClient.id ? updatedClient : client
      );

      setClients(updatedClients);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { updateClient, error, loading };
}

export default useUpdateClient;
