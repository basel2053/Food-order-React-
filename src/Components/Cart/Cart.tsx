import CartIcon from './CartIcon';

const Cart = () => {
	return (
		<div className='text-white flex items-center justify-center gap-3 '>
			<CartIcon />
			<h2 className='text-lg font-semibold '>Your Cart</h2>
			<div className='bg-[#b94517] font-medium px-4 py-[2px] rounded-3xl'>0</div>
		</div>
	);
};

export default Cart;
