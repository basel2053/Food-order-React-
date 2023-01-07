import Button from '../UI/Button';

interface IMeal {
	id?: string;
	name: string;
	description: string;
	price: number;
}

const MealItem = (props: IMeal) => {
	return (
		<div className='flex items-center justify-between border-b pt-2 pb-4'>
			<div className='meal-details'>
				<h4 className='font-bold text-lg '>{props.name}</h4>
				<p className='italic text-sm'>{props.description}</p>
				<h4 className='text-[#ad5502] font-bold text-xl my-1'>${props.price}</h4>
			</div>
			<div className='meal-control flex flex-col justify-center items-center w-[12%]'>
				<div className='flex items-center justify-between mb-3'>
					<p className='font-bold'>Amount</p>
					<input type='number' className='shadow w-2/6 pl-2' value={0} />
				</div>
				<Button className='w-5/6 font-bold'>+ Add</Button>
			</div>
		</div>
	);
};

export default MealItem;
