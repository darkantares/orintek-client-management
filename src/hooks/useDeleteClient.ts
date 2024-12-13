import { useState, useContext } from 'react';
import { GlobalContext } from '../context/context';

interface UseDeleteClient {
  deleteClient: (id: number | string) => Promise<void>;
  error: string | null;
  loading: boolean;
}

function useDeleteClient(url: string): UseDeleteClient {
  const { clientsState: { clients }, setClients } = useContext(GlobalContext);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const deleteClient = async (id: number | string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/${url}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      // Actualiza el estado global eliminando el cliente con el ID correspondiente
      setClients(clients?.filter((client) => client.id !== id) || []);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { deleteClient, error, loading };
}

export default useDeleteClient;
