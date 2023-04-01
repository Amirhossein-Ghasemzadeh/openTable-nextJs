import RestaurantNavbar from './components/RestaurantNavbar';
import Title from './components/Title';
import Description from './components/Description';
import Rating from './components/Rating';
import Images from './components/Images';
import Reviews from './components/Reviews';
import ReservationCard from './components/ReservationCard';

const RestaurantDetails = () => {
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavbar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className='w-[27%] relative text-reg'>
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
