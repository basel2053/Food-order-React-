import { Fragment } from 'react';
import HeaderCart from './Cart/HeaderCart';
const Header = () => {
	return (
		<Fragment>
			<header className='fixed t-0 left-0 flex items-center justify-between bg-primary h-20 px-[10%] w-full z-10 shadow-xl'>
				<h1 className='text-white text-3xl font-bold'>ReactMeals</h1>
				<HeaderCart />
			</header>
			<div className='h-96 w-[101%]'>
				<img
					src='platter-200.jpg'
					alt='banner-img'
					className=' h-full w-[100%] -translate-x-4 -translate-y-16 -rotate-[4deg] z-0  '
				/>
			</div>
		</Fragment>
	);
};

export default Header;
