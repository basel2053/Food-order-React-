import { Fragment } from 'react';
import Header from './Components/Header';
import Summary from './Components/Summary';
import Meals from './Components/Meals/Meals';
import Modal from './Components/Order/Modal';

function App() {
	return (
		<Fragment>
			<Header />
			<Summary />
			<Meals />
			<Modal />
		</Fragment>
	);
}

export default App;
