import { useRef, useState, useContext } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import MealsContext from '../../context/MealsContext';

interface IMeal {
	id?: string;
	name: string;
	description: string;
	price: number;
}

const MealItem = (props: IMeal) => {
	const mealCtx = useContext(MealsContext);
	const [isValid, setIsValid] = useState(true);
	const amountInputRef = useRef<HTMLInputElement | null>(null);
	const price = props.price.toFixed(2);
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredAmount = Number(amountInputRef.current?.value);
		if (enteredAmount < 1 || enteredAmount > 5) {
			setIsValid(false);
			return;
		}
		console.log(enteredAmount);

		mealCtx.addItem({
			id: props.id,
			name: props.name,
			amount: enteredAmount,
			price: props.price,
		});
	};
	return (
		<div className='flex items-center justify-between border-b pt-2 pb-4'>
			<div className='meal-details'>
				<h4 className='font-bold text-lg '>{props.name}</h4>
				<p className='italic text-sm'>{props.description}</p>
				<h4 className='text-[#ad5502] font-bold text-xl my-1'>${price}</h4>
			</div>
			<form className='meal-control flex flex-col justify-center items-center w-[12%]' onSubmit={submitHandler}>
				<Input
					label={'Amount'}
					input={{ id: 'amount_' + props.id, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}
					ref={amountInputRef}
				/>
				<Button className='w-5/6 font-bold'>+ Add</Button>
				{!isValid && <p>Please enter a valid amount (1-5).</p>}
			</form>
		</div>
	);
};

export default MealItem;
