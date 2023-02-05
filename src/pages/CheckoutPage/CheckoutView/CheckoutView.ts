export interface CheckoutItemProps {
    name: string;
    price: number;
  }
  
  export interface CheckoutContextProps {
    items: CheckoutItemProps[];
    addItem: (item: CheckoutItemProps) => void;
    removeItem: (item: CheckoutItemProps) => void;
    total: number;
  }