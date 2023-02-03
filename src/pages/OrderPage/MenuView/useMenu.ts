import { useEffect, useState } from 'react';
import { useEnv } from '../../../contexts';
import { EnvVar } from '../../../utils';
import { Menu} from './Menu';

/**
 * Hook to fetch movies
 */
export const useMenu = () => {
  const env = useEnv();
  const apiUrl = env.get(EnvVar.API_URL);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [menues, setMenues] = useState<Array<Menu>>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/top-10-menu`);
        console.log(response)

        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }

        const menues = await response.json();
        setMenues(menues);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, [apiUrl]);
  return { isLoading, isError, error, menues };
};
