import Card from './UI/Card';

const Modal = () => {
	return (
		<Card className='text-center text-white bg-neutral-700 w-[39%] m-auto -mt-36 z-20 relative'>
			<h2 className='text-3xl font-bold mb-5'>Delicious Food, Delivered To You</h2>
			<p className='mb-3'>
				Choose your favorite meal from our broad selection of avaliable meals and enjoy a delicious lunch or dinner at
				home
			</p>
			<p className='mb-4'>
				All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
			</p>
		</Card>
	);
};
export default Modal;
