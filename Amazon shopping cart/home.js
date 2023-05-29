const products = [{
  image: "images/products/athletic-cotton-socks-6-pairs.jpg",
  name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
  rating: {
    stars: "./images/ratings/rating-45.png",
    count: 87
  },
  price: 1090,
},
{ image: "images/products/intermediate-composite-basketball.jpg",
  name: "Intermediate Size Basketball",
  rating: {
    stars: "./images/ratings/rating-35.png",
    count: 127
  },
  price: 2095,
},
{
  image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  name: "Adults Plain Cotton T-Shirt- 2 Pack",
  rating: {
    stars: "./images/ratings/rating-30.png",
    count: 56
  },
  price: 799,
},
];


let productsHtml = '';

products.forEach((product)=>{
  productsHtml += `
      <div class="flex flex-col w-60 border py-8 gap-y-2 px-4 shrink-0">
        <div class="w-48 h-56">
          <img src="${product.image}" alt="image">
        </div>
        <div style="width: 195px; word-break: break-word;">
          ${product.name}
        </div>
       
        <div class="flex flex-row gap-x-2">
          <img class="w-24" src="${product.rating.stars}" alt="image">
          <p class="text-blue-500">${product.rating.count}</p>
        </div>
        
        <div class="font-semibold">
          $${(product.price / 100).toFixed(2)}
        </div>
        <div class="border w-12">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="flex flex-row items-center">
          <img class="w-6" src="./images/icons/checkmark.png" alt="">
          <p class="text-green-500 font-bold">Added</p> 
        </div>
        <div id="addToCart" class=" w-48 bg-yellow-400 hover:bg-yellow-500 rounded-3xl py-1 px-8 text-center cursor-pointer">
          <button class="">Add to Cart</button>
        </div>
      </div>
  `  
})

console.log(productsHtml)
document.querySelector("#productContainer").innerHTML = productsHtml

document.querySelectorAll('#addToCart').forEach((items)=>{
  items.addEventListener('click', ()=>{
    alert('clicked')
  })
})