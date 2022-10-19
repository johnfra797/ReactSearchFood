
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Food } from '../models/food.model';
import { foodSlice } from './states';
export interface AppStore{
    food:Food[];
}
export default configureStore<AppStore>({
    reducer:{
        food:foodSlice.reducer
    },
    middleware:(getDefaultMiddleware:any)=> getDefaultMiddleware({
        serializableCheck: false,
      })
})