import Cart from './Cart';

const HeaderCart = () => {
	return (
		<div className='bg-secondary rounded-3xl w-1/6 py-3 cursor-pointer hover:bg-[#2c0d00] active:bg-[#2c0d00] transition-all '>
			<Cart />
		</div>
	);
};

export default HeaderCart;
