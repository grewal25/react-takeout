import { Loading } from '../../components';
import { Menu } from '../../models/Menu';
import { MenuView } from './MenuView/MenuView';
import { useMenu } from './MenuView/useMenu';

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
    <div>
      <MenuView menus={menus as Menu} />
    </div>
  );
};
