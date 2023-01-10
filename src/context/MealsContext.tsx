import { createContext, ReactNode, useReducer } from 'react';
const MealsContext = createContext({
	items: [] as IMeal[],
	totalAmount: 0,
	addItem: (item: IMeal) => {},
	removeItem: (id: string) => {},
});

enum MealActionType {
	ADD = 'ADD',
	REMOVE = 'REMOVE',
}

export interface IMeal {
	id?: string;
	price: number;
	amount: number;
	name: string;
}

interface IMealAction {
	type: MealActionType;
	item?: IMeal;
	id?: string;
}

interface IMealState {
	items: IMeal[];
	totalAmount: number;
}

const defaultMealsState = { items: [], totalAmount: 0 };

const mealReducer = (state: IMealState, action: IMealAction) => {
	if (action.type === MealActionType.ADD && action.item) {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		const exisitingCartItemIndex = state.items.findIndex(item => item.id === action.item?.id);
		const exisitingCartItem = state.items[exisitingCartItemIndex];
		let updatedItems;
		if (exisitingCartItem) {
			const updatedItem: IMeal = { ...exisitingCartItem, amount: exisitingCartItem.amount + action.item.amount };
			updatedItems = [...state.items];
			updatedItems[exisitingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === MealActionType.REMOVE && action.id) {
		const exisitingCartItemIndex = state.items.findIndex(item => item.id === action.id);
		const exisitingItem = state.items[exisitingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - exisitingItem.price;
		let updatedItems;
		if (exisitingItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.id);
		} else {
			const updatedItem = { ...exisitingItem, amount: exisitingItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[exisitingCartItemIndex] = updatedItem;
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	return defaultMealsState;
};

export const MealsContextProvider = (props: { children: ReactNode }) => {
	const [mealState, dispatchMeal] = useReducer(mealReducer, defaultMealsState);
	const addItemToCartHandler = (item: IMeal) => {
		dispatchMeal({ type: MealActionType.ADD, item });
	};
	const removeItemToCartHandler = (id: string) => {
		dispatchMeal({ type: MealActionType.REMOVE, id });
	};
	return (
		<MealsContext.Provider
			value={{
				items: mealState.items,
				totalAmount: mealState.totalAmount,
				addItem: addItemToCartHandler,
				removeItem: removeItemToCartHandler,
			}}
		>
			{props.children}
		</MealsContext.Provider>
	);
};

export default MealsContext;
