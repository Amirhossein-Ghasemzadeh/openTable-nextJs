import RestaurantNavbar from '../components/RestaurantNavbar';
import MenuCard from '../components/MenuCard';

const RestaurantMenu = () => {
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNavbar />
      <MenuCard />
    </div>
  );
};

export default RestaurantMenu;
