import CartButtonContent from './CartButtonContent';

const HeaderCart = (props: { onOrder: React.MouseEventHandler }) => {
	return (
		<div
			className='bg-secondary rounded-3xl w-1/6 py-3 cursor-pointer hover:bg-[#2c0d00] active:bg-[#2c0d00] transition-all '
			onClick={props.onOrder}
		>
			<CartButtonContent />
		</div>
	);
};

export default HeaderCart;
