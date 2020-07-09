// geting the most updated cart
require(["ccRestClient"], function (ccRestClient) {
    ccRestClient.request('getIncompleteOrder', { 'includeShippingGroups': ['true'] }, function (response) {
        console.log(response);
        
        if (response == undefined ) {
          
          // Page Reload
          
        } else {
          var cartId = response.orderId;
          var cartAmount = response.priceInfo.amount;
          var cartItems = response.shoppingCart.numberOfItems;
          
          if (cartId == widget.cart().cartName() && cartAmount == widget.cart().amount() && cartItems == widget.cart().numberOfItems()) {
            
            // ADD PRODUCT

          } else {
            
            // Page Reload
            
            return
          }
        }
    }, console.error);
}); 
