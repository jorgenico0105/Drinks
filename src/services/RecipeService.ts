import axios from "axios"
import { CategoriesApiSchema, DrinkSschema, RecipeAPIResponseSchema } from "../schemas/recipes-schema"
import { DrinkTypeS, SearchFilterType } from "../types"

export async function getCategories(){
    const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data}=await axios(url)
    const result=CategoriesApiSchema.safeParse(data)
    if (result.success){
        return result.data
    }
}
export async function getRecipes(filters:SearchFilterType){
    const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingridient}`
    const {data}=await axios(url)
    const result=DrinkSschema.safeParse(data)
  
    if (result.success){
        return result.data
    }
}
export async function getIngredients(id:DrinkTypeS['idDrink']) {
    const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data}=await axios(url)
    const result=RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(result.success){
        return result.data
    }
    
}