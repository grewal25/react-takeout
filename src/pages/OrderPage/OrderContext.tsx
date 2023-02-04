import {
  useState,
  createContext,
  PropsWithChildren,
  useMemo,
  useCallback,
} from 'react';

interface CheckoutItemProps {
  name: string;
  price: number;
}

export interface CheckoutContextProps {
  items: CheckoutItemProps[];
  addItem: (item: CheckoutItemProps) => void;
  removeItem: (item: CheckoutItemProps) => void;
  total: number;
}

export const CheckoutContext = createContext<CheckoutContextProps>(
  {} as CheckoutContextProps
);

export const CheckoutProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CheckoutItemProps[]>([]);

  const addItem = useCallback(
    (item: CheckoutItemProps) => {
      const existingItem = items.find((i) => i.name === item.name);
      if (existingItem) {
        setItems((prevItems) =>
          prevItems.map((i) =>
            i.name === item.name ? { ...i, price: i.price + item.price } : i
          )
        );
      } else {
        setItems((prevItems) => [...prevItems, item]);
      }
    },
    [items]
  );

  const removeItem = useCallback((item: CheckoutItemProps) => {
    setItems((prevItems) => prevItems.filter((i) => i.name !== item.name));
  }, []);

  const total = useMemo(
    () =>
      items.reduce((sum, item) => parseFloat((sum + item.price).toFixed(2)), 0),
    [items]
  );

  const contextValue = useMemo(
    () => ({ items, addItem, removeItem, total }),
    [items, addItem, removeItem, total]
  );

  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  );
};
