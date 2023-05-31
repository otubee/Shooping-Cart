const cart= [];
console.log(cart)
let cartHtml = '';

    

cart.forEach((product)=>{
  cartHtml += `
        <div class="w-auto mb-4 py-8 px-5 border">
          <div class="ml-6 text-green-900 text-xl font-semibold">
            Delivery date: Tuesday, June 21
          </div>
        
          <div class="w-auto pt-6 flex flex-col md:flex-row">
            <div class=" w-auto flex flex-row space-x-5 mb-8">
              <div class="ml-4 w-24 h-24">
                <img src="${product.image}" alt="">
              </div>
          
              <div>
                <div class="font-semibold">
                  ${product.name}
                </div>
                <div class="text-red-700 font-semibold">
                  $${(product.price / 100).toFixed(2)}
                </div>
                <div>
                  Quantity: 2 <span class="text-blue-500 hover:text-red-600 cursor-pointer">Update</span> <span class="text-blue-500 hover:text-red-600 cursor-pointer">Delete</span>
                </div>
              </div>
            </div>
            
            <div class="ml-3">
              <div class="font-semibold">
                Choose a delivery option:
              </div>
              <div class="space-y-4">
                <div class="flex flex-row gap-x-2  items-center">
                  <div>
                    <input type="checkbox">
                  </div>
                  <div>
                    <a class="text-green-900 font-bold">Tuesday, June 21</a> <br> <span>FREE Shipping</span>
                  </div>
                </div>
                <div class="flex flex-row gap-x-2 items-center">
                  <div>
                    <input type="checkbox">
                  </div>
                  <div>
                    <a class="text-green-900 font-bold">Wednesday, June 15</a> <br> <span> $4.99 - Shipping</span>
                  </div>
                </div>
                <div class="flex flex-row gap-x-2 items-center">
                  <div>
                    <input type="checkbox">
                  </div>
                  <div>
                    <a class="text-green-900 font-bold">Monday, June 13</a><br> <span>$9.99 - Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `
  console.log(cartHtml)
  // document.querySelector('#cartPage').innerHTML = cartHtml
})