
 
 function CheckoutForm ( {children, className}){
   
 
    const details={
        id:"from dashboard",
        quanity:2,
        price:"from dashboard"
    }

  
    return (
        <form action='/api/checkout' method="POST" >
            <input type="hidden" name="id" value="from dashboard"  />
            <input type="hidden" name="price" value="price_1OGYbtCkbYuZxKHYZRDvj4AF" />
            <button type="submit" id="checkout-button">Trucker</button>
        </form>
    )
    
 }



 export {CheckoutForm}
 