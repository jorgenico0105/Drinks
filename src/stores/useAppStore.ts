import { create } from "zustand";
import { devtools } from "zustand/middleware"; 
import { createRecipe, RecipeType } from "./recipeSlice";
import { createFavorite,FavoritesSliceType } from "./favoritesSlice";
import { NotiSliceType,createNoti } from "./notification";

export const useAppSotre=create<RecipeType & FavoritesSliceType & NotiSliceType>()(devtools((...a)=>({
    ...createRecipe(...a),
    ...createFavorite(...a),
    ...createNoti(...a)
})))    