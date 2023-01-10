import CartIcon from './CartIcon';
import { useContext } from 'react';
import MealsContext from '../../context/MealsContext';

const CartButtonContent = () => {
	const mealsCtx = useContext(MealsContext);
	const numberOfItems = mealsCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);
	return (
		<div className='text-white flex items-center justify-center gap-3 '>
			<CartIcon />
			<h2 className='text-lg font-semibold '>Your Cart</h2>
			<div className='bg-[#b94517] font-medium px-4 py-[2px] rounded-3xl'>{numberOfItems}</div>
		</div>
	);
};

export default CartButtonContent;
