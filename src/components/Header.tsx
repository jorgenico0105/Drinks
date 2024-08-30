import {NavLink,useLocation } from "react-router-dom"
import { useEffect, useMemo } from "react"
import FormRecipe from "./FormRecipe"
import { useAppSotre } from "../stores/useAppStore"


export default function Header() {
  const location=useLocation()
  const isHome=useMemo(()=>location.pathname==='/',[location.pathname])
  const {fetchCategories}=useAppSotre()
  
   useEffect(()=>{
    fetchCategories()
   },[])
  return (
    <header className={isHome ? 'bg-header bg-center bg-cover': 'bg-slate-800'}>
        <div className="mx-auto max-w-7xl  px-5 py-16">
            <div className="flex flex-col gap-3 justify-between items-center md:flex-row">
                <div>
                    <img src="/logo.svg" alt="Coctail" className="w-32" />
                </div>  
                <nav className="flex gap-4">
                  <NavLink to='/'
                  className={({isActive})=>
                       isActive ? 'text-orange-400 uppercase font-bold' : 'text-white uppercase font-bold'
                  }
                  >Main</NavLink>
                  <NavLink to='/fav'
                  className={({isActive})=>
                    isActive ? 'text-orange-400 uppercase font-bold' : 'text-white uppercase font-bold'
                  }
                  > Favorites</NavLink>
                </nav>
            </div>
            {isHome && (
              <FormRecipe></FormRecipe>
            )}
        </div>
    </header>
  )
}
