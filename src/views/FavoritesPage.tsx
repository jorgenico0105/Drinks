import DrinkCard from "../components/DrinkCard"
import { useAppSotre } from "../stores/useAppStore"
import { useMemo } from "react"

export default function FavoritesPage() {
  const {favorites}=useAppSotre()
  const hasFav=useMemo(()=>favorites.length,[favorites])
  return (
    <>
      <h1 className="text-6xl font-extrabold">{hasFav ? 'Favorites' : 'No favorites add'}</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 gap-10 my-10">
          {favorites.map((favo)=>(
            <DrinkCard
            key={favo.idDrink}
            drink={favo}
            >

            </DrinkCard>
          ))}
        </div>
    </>
  )
}
