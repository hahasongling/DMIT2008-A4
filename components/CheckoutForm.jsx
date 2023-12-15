
 
 function CheckoutForm ( {children, className, productPriceId}){
   
 
    const details={
        id:"from dashboard",
        quanity:1,
        price:"from dashboard"
    }

  
    return (
        <form action='/api/checkout' method="POST" >
            <input type="hidden" name="id" value="from dashboard"  />
            <input type="hidden" name="price" value="price_1ONgKuJq06EPle0VCoN4OTwP" />
            <button type="submit" id="checkout-button">BuyNow</button>
        </form>
    )
    
 }



 export {CheckoutForm}
 