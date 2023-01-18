import { useRef, useState } from 'react';
import Button from '../UI/Button';
const isEmpty = (value: string) => value.trim() === '';
const isFiveChars = (value: string) => value.trim().length === 5;

const Checkout = (props: { onCancel: React.MouseEventHandler; onConfirm: Function }) => {
	const [formInputValidity, setFormInputValidity] = useState({ name: true, street: true, postal: true, city: true });
	const nameInputRef = useRef<HTMLInputElement>(null);
	const streetInputRef = useRef<HTMLInputElement>(null);
	const postalInputRef = useRef<HTMLInputElement>(null);
	const cityInputRef = useRef<HTMLInputElement>(null);
	const confirmHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const nameValue = nameInputRef.current?.value;
		const streetValue = streetInputRef.current?.value;
		const postalValue = postalInputRef.current?.value;
		const cityValue = cityInputRef.current?.value;
		const nameisValid = !isEmpty(nameValue as string);
		const streetisValid = !isEmpty(streetValue as string);
		const postalisValid = isFiveChars(postalValue as string);
		const cityisValid = !isEmpty(cityValue as string);

		setFormInputValidity({ name: nameisValid, street: streetisValid, postal: postalisValid, city: cityisValid });
		const formIsValid = nameisValid && streetisValid && postalisValid && cityisValid;
		if (!formIsValid) {
			return;
		}
		props.onConfirm({ name: nameValue, street: streetValue, postal: postalValue, city: cityValue });
	};
	return (
		<form onSubmit={confirmHandler}>
			<div className={`flex mb-2 ${!formInputValidity.name && 'text-red-500'}`}>
				<label className='w-1/5'>Your Name</label>
				<input
					type='text'
					name='name'
					className='border rounded shadow text-gray-600 focus:outline-none mr-2'
					ref={nameInputRef}
				/>
				{!formInputValidity.name && <p>Please enter valid name!</p>}
			</div>
			<div className={`flex mb-2 ${!formInputValidity.street && 'text-red-500'}`}>
				<label className='w-1/5'>Street</label>
				<input
					type='text'
					name='street'
					className='border rounded shadow text-gray-600 focus:outline-none mr-2'
					ref={streetInputRef}
				/>
				{!formInputValidity.street && <p>Please enter valid street!</p>}
			</div>
			<div className={`flex mb-2 ${!formInputValidity.postal && 'text-red-500'}`}>
				<label className='w-1/5'>Postal Code</label>
				<input
					type='text'
					name='postalCode'
					className='border rounded shadow text-gray-600 focus:outline-none mr-2'
					ref={postalInputRef}
				/>
				{!formInputValidity.postal && <p>Please enter valid postal code!</p>}
			</div>
			<div className={`flex mb-2 ${!formInputValidity.city && 'text-red-500'}`}>
				<label className='w-1/5'>City</label>
				<input
					type='text'
					name='city'
					className='border rounded shadow text-gray-600 focus:outline-none mr-2'
					ref={cityInputRef}
				/>
				{!formInputValidity.city && <p>Please enter valid city!</p>}
			</div>
			<Button
				className='bg-white text-[#ad5502] border border-[#ad5502] px-8 mr-3 hover:text-white hover:bg-secondary'
				type='button'
				onClick={props.onCancel}
			>
				Cancel
			</Button>
			<Button className='px-8' type='submit'>
				Confirm
			</Button>
		</form>
	);
};
export default Checkout;
