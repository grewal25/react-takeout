import { useContext } from 'react';
import { CheckoutContextProps } from '../../CheckoutPage/CheckoutView/CheckoutView';
import { CheckoutContext } from '../OrderContext';
import { AiTwotoneDelete } from 'react-icons/ai';

export const CheckoutView = () => {
  const { items, removeItem, total } =
    useContext<CheckoutContextProps>(CheckoutContext);

  return (
    <div>
      <div className="checkout-container">
        <h3>Your Orders</h3>
        {items?.length > 0 ? (
          <div className="list-order">
            <div className="items-container">
              {items.map((item) => (
                <div className="item" key={item.name}>
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">${item.price}</div>
                  <div className="item-delete">
                    <button
                      className="button-item"
                      onClick={() => removeItem(item)}
                    >
                      <AiTwotoneDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>Total: ${total}</div>
          </div>
        ) : (
          <div className="checkout-text">
            <p>Please click on a menu to start your order</p>
          </div>
        )}
      </div>
    </div>
  );
};
