import React from 'react';
import { useSelector } from 'react-redux';
import { FoodCard } from '../../components';
import { Food } from '../../models/food.model';
import { AppStore } from '../../redux/store';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	const foodsState = useSelector((store:AppStore)=>store.food);
	return (
		<>
		{
			foodsState.map((food:Food)=>{
				return <FoodCard food={food}></FoodCard>
			})
		}
		</>
	);
};

export default Home;
