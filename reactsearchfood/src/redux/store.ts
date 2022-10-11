
import { configureStore } from '@reduxjs/toolkit';
import { Food } from '../models/food.model';
import { foodSlice } from './states';
export interface AppStore{
    food:Food[];
}
export default configureStore<AppStore>({
    reducer:{
        food:foodSlice.reducer
    }
})