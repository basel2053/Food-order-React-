const OrderItem = () => {
	return (
		<div className='flex justify-between items-center border-b-2 border-[#b94517] mt-8'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-neutral-700 mb-2'>Schnitzel</h4>
				<div className='flex justify-between items-center gap-14 mb-3'>
					<h6 className='text-[#ad5502] font-bold'>$22.99</h6>
					<p className='font-bold border rounded-lg text-neutral-700 py-[2px] px-3'>x 1</p>
				</div>
			</div>
			<div className='flex items-center gap-2'>
				<button className='op-btn'>&#8722;</button>
				<button className='op-btn'>+</button>
			</div>
		</div>
	);
};

export default OrderItem;
