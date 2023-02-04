import { useContext } from 'react';
import { CheckoutContext, CheckoutContextProps } from '../OrderContext';

export const CheckoutView = () => {
  const { items, removeItem, total } =
    useContext<CheckoutContextProps>(CheckoutContext);

  return (
    <div>
      <h3>Your Order</h3>
      {items?.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                {item.name} - ${item.price}
                <button onClick={() => removeItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>Total: ${total}</div>
        </>
      ) : (
        <p>Please click on a menu to start your order</p>
      )}
    </div>
  );
};
