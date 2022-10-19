import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../models/enum";
import { Food } from "../../models/food.model";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Food[] = [];

export const foodSlice = createSlice({
  name: LocalStorageTypes.FOOD,
  initialState: getLocalStorage(LocalStorageTypes.FOOD)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FOOD))
    : initialState,
  reducers: {
    addFood: (state, action) => {
      setLocalStorage(LocalStorageTypes.FOOD, action.payload);
      return action.payload;
    },
  },
});
export const { addFood } = foodSlice.actions;
