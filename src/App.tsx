import { Fragment, useState } from 'react';
import Header from './Components/Header';
import Summary from './Components/Summary';
import Meals from './Components/Meals/Meals';
import Modal from './Components/Order/Modal';
import { MealsContextProvider } from './context/MealsContext';

function App() {
	const [showModal, setShowModal] = useState(false);
	const onOrderHandler = () => {
		setShowModal(true);
	};
	const onCloseOrderHandler = () => {
		setShowModal(false);
	};
	return (
		<MealsContextProvider>
			<Header onOrder={onOrderHandler} />
			<Summary />
			<Meals />
			{showModal && <Modal onCloseOrder={onCloseOrderHandler} />}
		</MealsContextProvider>
	);
}

export default App;
