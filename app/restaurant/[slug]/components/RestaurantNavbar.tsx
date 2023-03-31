import Link from 'next/link';

const RestaurantNavbar = () => {
  return (
    <nav className='flex text-reg border-b pb-2'>
      <Link href='/restaurant/amir' className='mr-7'>
        Overview{' '}
      </Link>
      <Link href='restaurant/amir/menu' className='mr-7'>
        Menu{' '}
      </Link>
    </nav>
  );
};

export default RestaurantNavbar;
