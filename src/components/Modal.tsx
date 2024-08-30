import { Dialog, Transition } from '@headlessui/react';
import { Fragment} from 'react';
import { useAppSotre } from '../stores/useAppStore';
import { DrinkIngredients } from '../types';
export default function Modal() {
  const {modal,closeModal,selectedRecipe,handleClickFav,favoExist,showNoti} = useAppSotre()

  const renderIngre=()=>{
    const ingredients: JSX.Element[]=[]
    for (let i=1 ; i <=6 ;i++){
      const ingredient= selectedRecipe[`strIngredient${i}` as keyof DrinkIngredients]
      const mesure= selectedRecipe[`strMeasure${i}` as keyof DrinkIngredients]
      
      if (ingredient && mesure){
        ingredients.push(
          <li key={i} className='text-lg font-normal'>
            {ingredient} - {mesure}
          </li>
          
        )
        
      }
      
    }
    return ingredients
  }
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {selectedRecipe.strDrink}
                  </Dialog.Title>
                  <img 
                  src={selectedRecipe.strDrinkThumb} 
                  alt='IMAGEN' 
                  className='mx-auto w-72'
                  />
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredients and Mesure:
                    {renderIngre()}
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instructions
                  </Dialog.Title>
                  <p className='text-lg'>{selectedRecipe.strInstructions}</p>
                  <div className='mt-5 flex justify-between gap-4'>
                    <button 
                    type='button'
                    className='w-full rounded p-3 font-bold uppercase text-white shadow bg-gray-600 hover:bg-gray-500'
                    onClick={closeModal}
                    >
                      Close
                    </button>
                    <button 
                    type='button'
                    className='w-full rounded p-3 font-bold uppercase text-white shadow bg-orange-600 hover:bg-orange-500'
                    onClick={()=>{handleClickFav(selectedRecipe),closeModal(),showNoti({text:'Succes Operation',error:false})}}
                    >
                      {favoExist(selectedRecipe.idDrink) ? ('Remove From Favorites'): 'Add Favorites '}
                      
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}