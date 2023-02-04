import { useContext } from 'react';
import { CheckoutContext, CheckoutContextProps } from '../../OrderPage/OrderContext';

export const CheckoutView = () => {
  const { items, removeItem, total } =
    useContext<CheckoutContextProps>(CheckoutContext);

  return (
    <div>
      <h3>Your Order</h3>
      {items?.length > 0 ? (
        <div className="list-order">
          <ul>
            {items.map((item) => (
              <li className="item-order" key={item.name}>
               <span className="price">{item.name} - ${item.price}</span> 
                <button className='remove-button' onClick={() => removeItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>Total: ${total}</div>
        </div>
      ) : (
        <p>Please click on a menu to start your order</p>
      )}
    </div>
  );
};
