import { useEffect, useState, useContext } from 'react';
import CartButtonContent from './CartButtonContent';
import MealsContext from '../../context/MealsContext';

const HeaderCart = (props: { onOrder: React.MouseEventHandler }) => {
	const mealsCtx = useContext(MealsContext);
	const [btnisHighlighted, setBtnIsHighlighted] = useState(false);
	const { items } = mealsCtx;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);
		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 1500);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);
	const btnClasses = btnisHighlighted ? `animate-pulse` : '';
	return (
		<div
			className={
				`bg-secondary rounded-3xl w-1/6 py-3 cursor-pointer hover:bg-[#2c0d00] active:bg-[#2c0d00] transition-all ` +
				btnClasses
			}
			onClick={props.onOrder}
		>
			<CartButtonContent />
		</div>
	);
};

export default HeaderCart;
