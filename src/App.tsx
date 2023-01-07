import { Fragment } from 'react';
import Header from './Components/Header';
import Modal from './Components/Modal';
import Meals from './Components/Meals/Meals';

function App() {
	return (
		<Fragment>
			<Header />
			<Modal />
			<Meals />
		</Fragment>
	);
}

export default App;
