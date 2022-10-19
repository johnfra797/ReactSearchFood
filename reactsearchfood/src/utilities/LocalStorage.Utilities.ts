import { Food } from "../models/food.model";

export const setLocalStorage=(key:string,value:Food[])=>{
    localStorage.setItem(key, JSON.stringify(value));
}
export const getLocalStorage=(key:string)=>{
    return localStorage.getItem(key) as string;
}