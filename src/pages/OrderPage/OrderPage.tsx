import { Loading } from '../../components';
import { Menu } from '../../models/Menu';
import { CheckoutView } from './CheckoutView/CheckoutView';
import { MenuView } from './MenuView/MenuView';
import { useMenu } from './MenuView/useMenu';
import { CheckoutProvider } from './OrderContext';

import './OrderPage.css';

export const OrderPage = () => {
  const { error, isLoading, menus } = useMenu();

  console.log(error, isLoading);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="order-page-container">
      <CheckoutProvider>
        <MenuView menus={menus as Menu} />
        <CheckoutView />
      </CheckoutProvider>
    </div>
  );
};
