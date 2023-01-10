import React, { Fragment, useContext } from 'react';
import Card from '../UI/Card';
import OrderItem from './OrderItem';
import { createPortal } from 'react-dom';
import Button from '../UI/Button';
import MealsContext, { IMeal } from '../../context/MealsContext';

const Backdrop = (props: { onCloseOrder: React.MouseEventHandler }) => {
	return (
		<div className='w-screen h-screen fixed z-30 top-0 left-0 bg-black opacity-60' onClick={props.onCloseOrder}></div>
	);
};

const ModalOverlay = (props: { onCloseOrder: React.MouseEventHandler }) => {
	const mealsCtx = useContext(MealsContext);
	const totalAmount = mealsCtx.totalAmount.toFixed(2);
	const hasitems = mealsCtx.items.length > 0;

	const cartItemRemoveHandler = (id: string) => {};
	const cartItemAddHandler = (item: IMeal) => {};

	const orderItems = (
		<ul>
			{mealsCtx.items.map(item => (
				<OrderItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id ? item.id : '')}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
	return (
		<Card className='fixed z-30 w-[36%] m-auto inset-x-0 top-1/4 max-h-[50%] overflow-y-scroll bg-white'>
			{orderItems}
			<div className='flex justify-between items-center mt-3'>
				<h4 className='font-bold text-2xl'>Total Amount</h4>
				<h4 className='font-bold text-2xl'>${totalAmount}</h4>
			</div>
			<div className='mt-4 mb-1 text-right'>
				<Button
					className='bg-white text-[#ad5502] border border-[#ad5502] px-8 mr-3 hover:text-white hover:bg-secondary'
					onClick={props.onCloseOrder}
				>
					Close
				</Button>
				{hasitems && <Button className='px-8'>Order</Button>}
			</div>
		</Card>
	);
};

const Modal = (props: { onCloseOrder: React.MouseEventHandler }) => {
	return (
		<Fragment>
			{createPortal(
				<Backdrop onCloseOrder={props.onCloseOrder} />,
				document.getElementById('root-backdrop') as HTMLElement
			)}
			{createPortal(
				<ModalOverlay onCloseOrder={props.onCloseOrder} />,
				document.getElementById('root-modal') as HTMLElement
			)}
		</Fragment>
	);
};

export default Modal;
