import { useEffect, useState } from 'react';

import { useEnv } from '../../../contexts';
import { Menu } from '../../../models/Menu';
import { EnvVar } from '../../../utils';

/**
 * Hook to fetch movies
 */
export const useMenu = () => {
  const env = useEnv();
  const apiUrl = env.get(EnvVar.API_URL);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState<string | null>(null);
  const [menus, setMenus] = useState<Menu>();

  useEffect(() => {
    const fetchMenu = async () => {
      setIsError(null);
      try {
        const response = await fetch(`${apiUrl}/getMenu`);
        console.log(response);

        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }

        const menus = (await response.json()) as Menu;

        setMenus(menus);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setIsError((e as Error)?.message || 'Fetch menus failed');
      }
    };
    void fetchMenu();
  }, [apiUrl]);
  return { isLoading, error, menus };
};
