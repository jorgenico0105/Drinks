import { StateCreator } from "zustand"
import { getCategories, getRecipes,getIngredients } from "../services/RecipeService"
import type { Categories, DrinkTypeS,DrinkType, SearchFilterType, DrinkIngredients } from "../types"


export type RecipeType={
    categories:Categories
    drinks:DrinkType
    selectedRecipe:DrinkIngredients
    modal:boolean
    fetchCategories: () => Promise<void>
    searchRecipe: (searchFilter:SearchFilterType) => Promise<void>
    selectRecipe:(id:DrinkTypeS['idDrink']) => Promise<void>
    closeModal: () =>void
}

export const createRecipe: StateCreator<RecipeType>=(set)=>({
    categories:{
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    selectedRecipe:{} as DrinkIngredients,
    modal:false,
    fetchCategories: async()=>{
       const categories=await getCategories()
       set({
        categories
       })
    },
    searchRecipe: async(filters)=>{
       const drinks= await getRecipes(filters)
       set({
        drinks
       })
    },
    selectRecipe: async(id)=>{
        const selectedRecipe=await getIngredients(id)
        set({
            selectedRecipe,
            modal:true
        })
    },
    closeModal:()=>{
        set({
            modal:false,
            selectedRecipe:{} as DrinkIngredients
        })
    }
})