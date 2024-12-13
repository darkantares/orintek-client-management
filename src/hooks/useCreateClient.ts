import { useState, useContext } from 'react';
import { GlobalContext } from '../context/context';
import { Clients } from '../interfaces';

interface UsePostClient<T> {
  postClient: (body: T) => Promise<void>;
  error: string | null;
  loading: boolean;
}

function usePostClient<T>(url: string): UsePostClient<T> {
  const { clientsState: { clients }, setClients } = useContext(GlobalContext);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const postClient = async (body: T) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const newClient = await response.json();

      // Actualiza el estado global con el nuevo cliente
      setClients([...(clients || []), newClient]);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { postClient, error, loading };
}

export default usePostClient;
