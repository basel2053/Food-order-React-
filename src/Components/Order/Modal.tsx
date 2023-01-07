import { Fragment } from 'react';
import Card from '../UI/Card';
import OrderItem from './OrderItem';
import { createPortal } from 'react-dom';
import Button from '../UI/Button';

const Backdrop = () => {
	return <div className='w-screen h-screen fixed z-30 top-0 left-0 bg-black opacity-60'></div>;
};

const ModalOverlay = () => {
	return (
		<Card className='fixed z-30 w-[36%] m-auto inset-x-0 top-1/4  bg-white'>
			<OrderItem />
			<OrderItem />
			<div className='flex justify-between items-center mt-3'>
				<h4 className='font-bold text-2xl'>Total Amount</h4>
				<h4 className='font-bold text-2xl'>$72.49</h4>
			</div>
			<div className='mt-4 mb-1 text-right'>
				<Button className='bg-white text-[#ad5502] border border-[#ad5502] px-8 mr-3 hover:text-white hover:bg-secondary'>
					Close
				</Button>
				<Button className='px-8'>Order</Button>
			</div>
		</Card>
	);
};

const Modal = () => {
	return (
		<Fragment>
			{createPortal(<Backdrop />, document.getElementById('root-backdrop') as HTMLElement)}
			{createPortal(<ModalOverlay />, document.getElementById('root-modal') as HTMLElement)}
		</Fragment>
	);
};

export default Modal;
