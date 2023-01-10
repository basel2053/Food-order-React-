interface IOrderItem {
	id?: string;
	name: string;
	amount: number;
	price: number;
	onAdd: React.MouseEventHandler;
	onRemove: React.MouseEventHandler;
}

const OrderItem = (props: IOrderItem) => {
	return (
		<li className='flex justify-between items-center border-b-2 border-[#b94517] mt-8'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-neutral-700 mb-2'>{props.name}</h4>
				<div className='flex justify-between items-center gap-14 mb-3'>
					<h6 className='text-[#ad5502] font-bold'>${props.price.toFixed(2)}</h6>
					<p className='font-bold border rounded-lg text-neutral-700 py-[2px] px-3'>x {props.amount}</p>
				</div>
			</div>
			<div className='flex items-center gap-2'>
				<button className='op-btn' onClick={props.onAdd}>
					&#8722;
				</button>
				<button className='op-btn' onClick={props.onRemove}>
					+
				</button>
			</div>
		</li>
	);
};

export default OrderItem;
