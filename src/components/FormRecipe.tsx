
import { useAppSotre } from "../stores/useAppStore"
import { useState } from "react"

export default function FormRecipe() {
  const {categories,searchRecipe,showNoti}=useAppSotre()
  const {drinks}=categories
  const [searchFilter,setSearchFilter]=useState({
    ingridient:'',
    category:''
  }) 
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>)=>{
    setSearchFilter({
      ...searchFilter,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // Validar 
    if(Object.values(searchFilter).includes('')){
      showNoti({text:'All fields are required',error:true})
      return
    }
    searchRecipe(searchFilter)
    showNoti({text:'Looking recipes',error:false})
  }
  return (
    <>
        <form 
        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow-md space-y-5" 
        onSubmit={handleSubmit}
        >
                <div className="space-y-4">
                    <label htmlFor="ingridient"
                    className="block text-white uppercase font-extrabold text-lg "
                    > 
                      Name or Ingredient
                    </label>
                    <input 
                    type="text" 
                    name="ingridient"
                    id='ingridient'
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Name or Ingredient. Ej. Vodka, Coffe, Ron"
                    onChange={handleChange}
                    />
              </div>
              <div className="space-y-4">
                    <label htmlFor="ingridient"
                    className="block text-white uppercase font-extrabold text-lg mt-3"
                    >
                      Categories
                    </label>
                    <select 
                    name="category"
                    id='category'
                    onChange={handleChange}
                    value={searchFilter.category}
                    className="p-3 w-full rounded-lg focus:outline-none"
                    >
                    <option value="">--Select--</option>
                    {drinks.map(cate=>(
                      <option
                      key={cate.strCategory}
                      value={cate.strCategory}
                      >{cate.strCategory}</option>
                    ))}
                    </select>
              </div>
              <input type="submit"
              value='Search Recipes'
              className="cursor-pointer bg-orange-700 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase p-3"
              />
              </form>
    </>
  )
}
