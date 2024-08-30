import {z} from 'zod'
import { CategoriesApiSchema,  DrinkSchema,  DrinkSschema, RecipeAPIResponseSchema, SearchFilter } from '../schemas/recipes-schema'

export type Categories=z.infer<typeof CategoriesApiSchema>
export type SearchFilterType=z.infer<typeof SearchFilter>
export type DrinkType=z.infer<typeof DrinkSschema>
export type DrinkTypeS=z.infer<typeof DrinkSchema>
export type DrinkIngredients=z.infer<typeof RecipeAPIResponseSchema>