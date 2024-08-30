import { DrinkTypeS } from "../types"
import { useAppSotre } from "../stores/useAppStore"
type DrinkCardProps={
    drink:DrinkTypeS
}
export default function DrinkCard({drink}:DrinkCardProps) {
    const {selectRecipe} =useAppSotre()
  return (
    <div className="border shadow-lg">
        <div className="overflow-hidden">
            <img 
            src={drink.strDrinkThumb} 
            alt="Drinks" 
            className="hover:scale-125 transition-transform hover:rotate-2"
            />
        </div>
        <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
        type="button"
        className="bg-orange-400 hover:bg-orange-600 mt-5 w-full p-3 font-bold text-white text-lg"
        onClick={()=>selectRecipe(drink.idDrink)}
        >
            See Recipe
        </button>
        </div>
       
    </div>
  )
}
