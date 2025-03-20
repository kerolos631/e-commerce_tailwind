let onSaleObject = document.querySelector(".onsale-box");
let computerBox = document.querySelector(".computer-box");
let computerBoxTwo = document.querySelector(".computer-box-two");
let allProducts = document.querySelector(".all-products");
let itemsSelected;
let searchInput = document.querySelector(".search-products");

if(localStorage.products != null){
    itemsSelected=JSON.parse(localStorage.products);

}else{
    itemsSelected=[];
};


function goToSearch(){
  
    
    location.href="products.html";
    
   
}

function searchRun(){
    
    allProducts.innerHTML=``;
    fetch("dist/js/items.json")
    .then(response => response.json())
    .then(data => {

        data.forEach(product =>{
            const oldPrice = product.old_price ? `<span class= " text-black/50 line-through">$${product.old_price}</span>` : ""; 
            let isInCart = itemsSelected.some(item => item.id == product.id);
            if(product.category.includes(searchInput.value)){
                console.log(product.category.includes(searchInput.value));
                
                allProducts.innerHTML += `

         <div class="box p-3 relative bg-white border-2 border-black/20 shadow-2xl flex flex-col items-center justify-center w-fit h-64 ">
                <div class="buy-tools absolute z-50 top-1/2 -translate-y-1/2 right-0 p-1 ">
                        <div class="heart   ">
                           
                            <i class="fa-solid fa-heart cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                           
                        </div>
                        <div class="buy-cart btn-buy" data-id=${product.id}>
                            <i class=" fa-solid fa-cart-shopping cursor-pointer  hover:text-yellow-500 duration-1000 mb-2 ${isInCart?"text-yellow-500 pointer-events-none":"text-black"}"></i>

                        </div>
                        <div class="share">
                            <i class="fa-solid fa-share cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                        </div>

                        
                    </div>   
                <div class="product image relative cursor-pointer">
                        <img class="w-32  absolute top-0 left-0  "  src=${product.img} alt="">
                        <img  class="w-32   relative z-10 opacity-0 hover:opacity-100 duration-1000" src=${product.img_hover} alt="">
                    </div>
                    <div class="product-name">
                        <p class="capitalize text-sm text-gray-500  ">${product.name}</p>
                    </div>
                    <div class="stars text-yellow-600 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="product price">
                        <span class="text-yellow-400 text-bold">${product.price} $</span>
                        <span class="line-through text-black/50">${oldPrice}</span>
                    </div>
                </div>

        
        `
                  
            }
            
        })

        
    })
    
}

function filterSearch(mySearch){
    let checkStatus = document.querySelector(".checkBox");
    console.log(checkStatus.check)
    
    allProducts.innerHTML=``;
    fetch("dist/js/items.json")
    .then(response => response.json())
    .then(data => {

        data.forEach(product =>{
            const oldPrice = product.old_price ? `<span class= " text-black/50 line-through">$${product.old_price}</span>` : ""; 
            let isInCart = itemsSelected.some(item => item.id == product.id);
            if(product.category.includes(mySearch)){
                // console.log(product.category.includes(searchInput.value));
                
                allProducts.innerHTML += `

         <div class="box p-3 relative bg-white border-2 border-black/20 shadow-2xl flex flex-col items-center justify-center w-fit h-64 ">
                <div class="buy-tools z-50 absolute top-1/2 -translate-y-1/2 right-0 p-1 ">
                        <div class="heart   ">
                           
                            <i class="fa-solid fa-heart cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                           
                        </div>
                        <div class="buy-cart btn-buy" data-id=${product.id}>
                            <i class=" fa-solid fa-cart-shopping cursor-pointer  hover:text-yellow-500 duration-1000 mb-2 ${isInCart?"text-yellow-500 pointer-events-none":"text-black"}"></i>

                        </div>
                        <div class="share">
                            <i class="fa-solid fa-share cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                        </div>

                        
                    </div>   
                <div class="product image relative cursor-pointer">
                        <img class="w-32  absolute top-0 left-0  "  src=${product.img} alt="">
                        <img  class="w-32   relative z-10 opacity-0 hover:opacity-100 duration-1000" src=${product.img_hover} alt="">
                    </div>
                    <div class="product-name">
                        <p class="capitalize text-sm text-gray-500  ">${product.name}</p>
                    </div>
                    <div class="stars text-yellow-600 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="product price">
                        <span class="text-yellow-400 text-bold">${product.price} $</span>
                        <span class="line-through text-black/50">${oldPrice}</span>
                    </div>
                </div>

        
        `
                  
            }
            
        })

        
    })
    
}



fetch("dist/js/items.json")
.then(response => response.json())
.then(data => {
   data.forEach(product => {
    const oldPrice = product.old_price ? `<span class= " text-black/50 line-through">$${product.old_price}</span>` : ""; 
    let isInCart = itemsSelected.some(item => item.id == product.id);

    

  if(onSaleObject){
    
        onSaleObject.innerHTML +=`
        <div class="swiper-slide  ">
                <div class="box p-3 bg-white border-2 border-black/20 shadow-2xl flex flex-col items-center justify-center w-fit ">
                <div class="buy-tools z-50 absolute top-1/2 -translate-y-1/2 right-0 p-1 ">
                        <div class="heart   ">
                           
                            <i class="fa-solid fa-heart cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                           
                        </div>
                        <div class="buy-cart btn-buy" data-id=${product.id}>
                            <i class=" fa-solid fa-cart-shopping cursor-pointer hover:text-yellow-500 duration-1000 mb-2 ${isInCart?"pointer-events-none text-yellow-500":""}"></i>
                        </div>
                        <div class="share">
                            <i class="fa-solid fa-share cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                        </div>

                        
                    </div>   
                <div class="product image relative cursor-pointer">
                        <img class="w-32  absolute top-0 left-0  "  src=${product.img} alt="">
                        <img  class="w-32   relative z-10 opacity-0 hover:opacity-100 duration-1000" src=${product.img_hover} alt="">
                    </div>
                    <div class="product-name">
                        <p class="capitalize text-sm text-gray-500  ">${product.name}</p>
                    </div>
                    <div class="stars text-yellow-600 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="product price">
                        <span class="text-yellow-400 text-bold">${product.price} $</span>
                        <span class="line-through text-black/50">${oldPrice} </span>
                    </div>
                </div>


              </div>
        ` 

  }
    
if(computerBox){
    
        computerBox.innerHTML +=`
        <div class="swiper-slide  ">
                <div class="box p-3 bg-white border-2 border-black/20 shadow-2xl flex flex-col items-center justify-center w-fit ">
                <div class="buy-tools z-50 absolute top-1/2 -translate-y-1/2 right-0 p-1 ">
                        <div class="heart   ">
                           
                            <i class="fa-solid fa-heart cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                           
                        </div>
                        <div class="buy-cart btn-buy" data-id=${product.id}>
                           <i class=" fa-solid fa-cart-shopping cursor-pointer  hover:text-yellow-500 duration-1000 mb-2 ${isInCart?"text-yellow-500  pointer-events-none":""}"></i>

                        </div>
                        <div class="share">
                            <i class="fa-solid fa-share cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                        </div>

                        
                    </div>   
                <div class="product image relative cursor-pointer">
                        <img class="w-32  absolute top-0 left-0  "  src=${product.img} alt="">
                        <img  class="w-32   relative z-10 opacity-0 hover:opacity-100 duration-1000" src=${product.img_hover} alt="">
                    </div>
                    <div class="product-name">
                        <p class="capitalize text-sm text-gray-500  ">${product.name}</p>
                    </div>
                    <div class="stars text-yellow-600 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="product price">
                        <span class="text-yellow-400 text-bold">${product.price} $</span>
                        <span class="line-through text-black/50">${oldPrice} </span>
                    </div>
                </div>


              </div>
        ` 
    

}

if(computerBoxTwo){
    
        computerBoxTwo.innerHTML +=`
        <div class="swiper-slide  ">
                <div class="box p-3 bg-white border-2 border-black/20 shadow-2xl flex flex-col items-center justify-center w-fit ">
                <div class="buy-tools z-50 absolute top-1/2 -translate-y-1/2 right-0 p-1 ">
                        <div class="heart   ">
                           
                            <i class="fa-solid fa-heart cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                           
                        </div>
                        <div class="buy-cart btn-buy" data-id=${product.id}>
                             <i class=" fa-solid fa-cart-shopping cursor-pointer  hover:text-yellow-500 duration-1000 mb-2 ${isInCart?"text-yellow-500 pointer-events-none":""}"></i>

                        </div>
                        <div class="share">
                            <i class="fa-solid fa-share cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                        </div>

                        
                    </div>   
                <div class="product image relative cursor-pointer">
                        <img class="w-32  absolute top-0 left-0  "  src=${product.img} alt="">
                        <img  class="w-32   relative z-10 opacity-0 hover:opacity-100 duration-1000" src=${product.img_hover} alt="">
                    </div>
                    <div class="product-name">
                        <p class="capitalize text-sm text-gray-500  ">${product.name}</p>
                    </div>
                    <div class="stars text-yellow-600 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="product price">
                        <span class="text-yellow-400 text-bold">${product.price} $</span>
                        <span class="line-through text-black/50">${oldPrice} </span>
                    </div>
                </div>


              </div>
        ` 


}
    
    

    if(allProducts){
        
        allProducts.innerHTML += `

         <div class="box p-3 relative bg-white border-2 border-black/20 shadow-2xl flex flex-col items-center justify-center w-fit ">
                <div class="buy-tools z-50 absolute top-1/2 -translate-y-1/2 right-0 p-1 ">
                        <div class="heart   ">
                           
                            <i class="fa-solid fa-heart cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                           
                        </div>
                        <div class="buy-cart btn-buy" data-id=${product.id}>
                            <i class=" fa-solid fa-cart-shopping cursor-pointer  hover:text-yellow-500 duration-1000 mb-2 ${isInCart?"text-yellow-500 pointer-events-none":"text-black"}"></i>

                        </div>
                        <div class="share">
                            <i class="fa-solid fa-share cursor-pointer hover:text-yellow-500 duration-1000 mb-2 "></i>
                        </div>

                        
                    </div>   
                <div class="product image relative cursor-pointer">
                        <img class="w-32  absolute top-0 left-0  "  src=${product.img} alt="">
                        <img  class="w-32   relative z-10 opacity-0 hover:opacity-100 duration-1000" src=${product.img_hover} alt="">
                    </div>
                    <div class="product-name">
                        <p class="capitalize text-sm text-gray-500  ">${product.name}</p>
                    </div>
                    <div class="stars text-yellow-600 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="product price">
                        <span class="text-yellow-400 text-bold">${product.price} $</span>
                        <span class="line-through text-black/50">${oldPrice}</span>
                    </div>
                </div>

        
        `

    }



   })
    
    
})