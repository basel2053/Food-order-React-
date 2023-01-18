import MealItem from './MealItem';
import Card from '../UI/Card';
import { useEffect, useState } from 'react';
interface IMeal {
	id?: string;
	name: string;
	description: string;
	price: number;
}
const Meals = () => {
	const [meals, setMeals] = useState([] as IMeal[]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState<unknown>();

	const getMeals = async () => {
		const res = await fetch('http://localhost:3000/meals');
		if (!res.ok) {
			throw new Error('Something went wrong!');
		}
		const data = await res.json();
		setMeals(data);
		setIsLoading(false);
	};

	useEffect(() => {
		getMeals().catch(err => {
			setIsLoading(false);
			setHttpError((err as Error).message);
		});
	}, []);

	if (isLoading) {
		return (
			<Card className='bg-white w-7/12 m-auto my-9 px-8 pb-8'>
				<p>Loading...</p>
			</Card>
		);
	}
	if (httpError) {
		return (
			<Card className='bg-white w-7/12 m-auto my-9 px-8 pb-8'>
				<p>{String(httpError)}</p>
			</Card>
		);
	}

	return (
		<Card className='bg-white w-7/12 m-auto my-9 px-8 pb-8'>
			{meals.map(meal => (
				<MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
			))}
		</Card>
	);
};

export default Meals;
