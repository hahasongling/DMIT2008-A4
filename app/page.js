
import { BsStripe } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";

import {ProductCard} from '@/components/ProductCard'

export default function Store({params}) {
 
 
  return (
      <>
      <nav className="py-1 px-2 flex justify-end ">
        <span> </span>
        <CiShoppingCart className="w-6 h-6   stroke-slate-900 stroke-1"/>
      </nav>
           <header className="mt-8 mb-20">
            <BsStripe className="w-10 h-10 sm:w-12 sm:h-12  mb-1 text-indigo-400 mx-auto" />
            <h1 className='text-xl sm:text-2xl md:text-3xl  text-center font-medium text-zinc-900'>Stripe Checkout</h1>
           
           </header>
           <main className="px-4 max-w-6xl  mx-auto mb-96">
          
              <header className="mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-zinc-950 font-semibold">Bike Packing & Touring Bikes</h2>
              </header>
          
          
        
           <ProductCard/>
              

                
           </main>

      </>
        )
}
