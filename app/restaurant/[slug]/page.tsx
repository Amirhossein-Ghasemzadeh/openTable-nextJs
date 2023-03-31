import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
import RestaurantNavbar from './components/RestaurantNavbar';
import Title from './components/Title';
import Description from './components/Description';
import Rating from './components/Rating';
import Images from './components/Images';
import Reviews from './components/Reviews';
import ReservationCard from './components/ReservationCard';

const RestaurantDetails = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navbar />
        <Header />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
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
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetails;
