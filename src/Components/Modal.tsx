import { Fragment } from 'react';
import Card from './UI/Card';
import { createPortal } from 'react-dom';

const Modal = () => {
	return (
		<Fragment>
			{createPortal(
				<Card className='text-center text-white bg-neutral-700 w-[39%] fixed top-1/4 z-30 left-1/2 -translate-x-1/2'>
					<h2 className='text-3xl font-bold mb-5'>Delicious Food, Delivered To You</h2>
					<p className='mb-3'>
						Choose your favorite meal from our broad selection of avaliable meals and enjoy a delicious lunch or dinner
						at home
					</p>
					<p className='mb-4'>
						All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
					</p>
				</Card>,
				document.getElementById('root-modal') as HTMLElement
			)}
		</Fragment>
	);
};
export default Modal;
