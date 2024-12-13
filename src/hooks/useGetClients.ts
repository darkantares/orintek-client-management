import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/context';
import { Clients } from '../interfaces';

interface useGetClients<T> {
    clients: Clients[];
    error: string | null;
    loading: boolean;
}

function useGetClients<T>(url: string): useGetClients<T> {
   const { clientsState:{clients}, setClients } = useContext(GlobalContext);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:3001/${url}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();

        setClients(result);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { clients, error, loading };
}

export default useGetClients;
