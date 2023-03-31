import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <main className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        <MenuCard />
      </div>
    </main>
  );
};

export default Menu;
