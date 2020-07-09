# Oracle Cloud-Commerce - Cart Update
Check cart when adding products on different devices


### Incomplete Cart Request
#### OBS: 
You can use this code on the console
Need to be logged into the store
```javascript
require(["ccRestClient"], function (ccRestClient) {
  ccRestClient.request('getIncompleteOrder', { 'includeShippingGroups': ['true'] }, function (response) {
    console.log(response); 
    
  }, console.error);
});
```

### Compare the response with the current cart
```javascript
// geting the most updated cart
require(["ccRestClient"], function (ccRestClient) {
    ccRestClient.request('getIncompleteOrder', { 'includeShippingGroups': ['true'] }, function (response) {
        console.log(response);
        
        if (response == undefined ) {
          
          // Reload page to update the cart
          
        } else {
          var cartId = response.orderId;
          var cartAmount = response.priceInfo.amount;
          var cartItems = response.shoppingCart.numberOfItems;
          
          if (cartId == widget.cart().cartName() && cartAmount == widget.cart().amount() && cartItems == widget.cart().numberOfItems()) {
            
            // ADD PRODUCT

          } else {
            
            // Reload page to update the cart
            
            return
          }
        }
    }, console.error);
}); 
```
