import { StateCreator } from "zustand";
import { DrinkIngredients } from "../types";


export type FavoritesSliceType={
    favorites: DrinkIngredients[]
    handleClickFav:(recipe:DrinkIngredients)=>void
    favoExist:(id:DrinkIngredients['idDrink'])=>boolean
    loadFromStorage: () => void
}
export const createFavorite: StateCreator<FavoritesSliceType>=(set,get)=>({
    favorites:[],
    handleClickFav:(recipe)=>{
        if(get().favorites.some(favo=>favo.idDrink===recipe.idDrink)){
            set((state)=>({
                favorites:state.favorites.filter(favo=>favo.idDrink!==recipe.idDrink)
            }))
          
        }else{
            set((state)=>({ 
                favorites:[...state.favorites,recipe]
            }))
            
        }
        localStorage.setItem('favorites',JSON.stringify(get().favorites))
    },
    favoExist:(id)=>{
        return get().favorites.some(favo=>favo.idDrink===id)
    },
    loadFromStorage:()=>{
        const storaFav=localStorage.getItem('favorites')
        if(storaFav){
            set({
                favorites:JSON.parse(storaFav)
            })
        }
    }
})