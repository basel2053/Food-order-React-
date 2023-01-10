import MealItem from './MealItem';
import Card from '../UI/Card';
const dummyMeals = [
	{
		id: 'm1',
		name: 'Sushi',
		description: 'Finest fish and veggies',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Schnitzel',
		description: 'A german specialty!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Barbecue Burger',
		description: 'American, raw, meaty',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Green Bowl',
		description: 'Healthy...and green...',
		price: 18.99,
	},
];
const Meals = () => {
	return (
		<Card className='bg-white w-7/12 m-auto my-9 px-8 pb-8'>
			{dummyMeals.map(meal => (
				<MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
			))}
		</Card>
	);
};

export default Meals;
