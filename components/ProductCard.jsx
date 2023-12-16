import { getEmployees } from "@/lib/firebase/getEmployees";
import {CheckoutForm} from "@/components/CheckoutForm"

// const data = {
//   description: "All Road Touring Bike ",
//   id: "prod_YOUR PRODUCT ID",
//   price: "your product price from Stripe dashboard",
//   product: "Bridge Club",
//   displayPrice: 204500,
//   short:"A highly versatile all road touring bike.",
//   full_description: "A highly versatile all road touring bike that hits the sweet spot on and off road",
//   image: "/bikes/bike-1.jpg",
//   slug: "bridge-club",
// }
 
function ProductCard(  {uid, productName, productPrice, productImage,shortDescription} ){
 
     return(  
        <aside className="flex flex-col justify-between max-w-sm mx-auto">
          
      
           <img  src={`/${productImage}`} alt={productName} />
 
       <div className="px-3 border border-white hover:bg-sky-50   hoverborder-sky-100 py-1">
     
       <h2 className="flex items-center justify-between"> 
       <span className='text-xl font-semibold ' href={`/product//${uid}`}>{productName}</span>      
     
       <span type="button" disabled className="w-fit bg-blue-50 leading-3 px-2  text-xs font-medium border border-blue-50  shadow-sm shadow-blue-200/75   rounded-lg    text-blue-500  "  >{productPrice}</span>          
        </h2>
         <p className=" text-sm text-zinc-500 mt-1.5 mb-2">{shortDescription} <span className='  text-blue-600 font-semibold   '>read more...</span>  </p>
    
       </div>

       <footer>
       <CheckoutForm/>
       </footer>
      </aside>
   
     )
 }
 async function EmployeesPage (  ) {
  const payload = await getEmployees();
  const keys =  Object.keys(payload)
  const values = Object.values(payload)
  const entries = Object.entries(payload)
  const dataLoading = true;

  //  conditional rendering data loading
  // if(dataLoading) {
  //   return  null
  // }
  
  // if(!dataLoading) {
  //   return <p>You have the data</p>
  // }

 return(
  <>
  <PageHeader title="Enjoy shopping at Songling's store" tagline="Without you, we wouldn't be us."/>
  <main className=" min-h-screen py-24">
     {
        values.map(item=> <ProductCard  key={item.uid} {...item}/>)
     }
   </main>
  </>
 )


}
 export {EmployeesPage}