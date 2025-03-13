// close cart 
let myCart = document.querySelector(".cart");
let xSign  =document.querySelector(".x-sign");
let bagShop = document.querySelector(".bag-shop");


function closeTap (){
  xSign.addEventListener('click',function(){
    myCart.classList.toggle("md:w-72");
    myCart.classList.toggle("w-full");
    myCart.classList.toggle("w-0");
  });
  bagShop.addEventListener('click',function(){
    myCart.classList.toggle("md:w-72");
    myCart.classList.toggle("w-full");
    myCart.classList.toggle("w-0");

  })
}
//products num

function numberOfItems(){
  let itemsNum = document.querySelector(".itemsNum");
  let cartNums = document.querySelector(".cartNums")

  itemsNum.innerHTML = `(${dataStore.length} item in cart)`;
  cartNums.innerHTML = dataStore.length;
}

// store data
let dataStore;
if(localStorage.products != null){
  dataStore = JSON.parse(localStorage.products);
}else{
  dataStore=[];
};


fetch("dist/js/items.json")
.then(response => response.json())
.then(data =>{
let allBtns = document.querySelectorAll(".buy-cart");
allBtns.forEach(button => {
  button.addEventListener('click' , function(){
    let productId = button.dataset.id;
    let selectedObj = data.find(product => productId == product.id);
    dataStore.push(selectedObj);
    localStorage.setItem("products" , JSON.stringify(dataStore));
    button.classList.toggle("text-amber-500");
    button.classList.toggle("pointer-events-none");


    addToCard ();
    


  })

 
})




});
console.log(dataStore)




//add to cart section

function addToCard (){
  let cartSec = document.querySelector(".cart-products");
  let checkSec = document.querySelector(".checkSec");
  let orderContent = document.getElementById("ordercontent");
  
  cartSec.innerHTML =``;
  if(checkSec){
    checkSec.innerHTML = ``;
  }
  if(orderContent){
    orderContent.value="";
  }

  for(let i =0 ; i<dataStore.length ; i++){
    
  cartSec.innerHTML += `
  <div class="product-box border-b-1 border-black/30   flex items-center justify-between ">
           <div class="product-image">
               <img class="max-h-32 " src=${dataStore[i].img} alt="">
           </div>
           <div class="product-details w-3/4   ">
               <p class="line-clamp-2 text-sm  text-black/60 capitalize ">${dataStore[i].name}</p>
                <p>${dataStore[i].price} $</p>
           </div>
           <div class="delete-sign">
               <i onclick="deleteItems(${i})" class="fa-solid fa-trash trash hover:text-yellow-600 duration-1000 cursor-pointer "></i>
           </div>

        </div>
`
if(checkSec){
  checkSec.innerHTML += `
<div class="product-box border-b-1 border-black/30   flex items-center justify-between p-2 ">
         <div class="product-image">
             <img class="max-h-32 " src=${dataStore[i].img} alt="">
         </div>
         <div class="product-details w-3/4   ">
             <p class="line-clamp-2 text-sm  text-black/60 capitalize ">${dataStore[i].name}</p>
              <p>${dataStore[i].price} $</p>
         </div>
         <div class="delete-sign">
             <i onclick="deleteItems(${i})" class="fa-solid fa-trash trash hover:text-yellow-600 duration-1000 cursor-pointer "></i>
         </div>

      </div>
`
}
if(orderContent){
  orderContent.value +=`${dataStore[i].name}--${dataStore[i].price}--`
  
}


  }
  numberOfItems();
  deleteAllBtn();
  totalPrice()
 


}


//delete items
function deleteItems(id){
  // let allBtnsMatched = document
  // let allBtnsMatched = document.querySelectorAll(`.buy-cart[data-id ="${dataStore[i].id}"`);
  // allBtnsMatched.forEach(ele =>{
  //   ele.classList.toggle("text-amber-500");
  //   ele.classList.toggle("pointer-events-none");

    
  // })

  dataStore.splice(id , 1);
  localStorage.products = JSON.stringify(dataStore);
  addToCard();
  


};

// delete all items
function deleteAllBtn(){
  let deleAll = document.querySelector(".dele-all");
  if(dataStore.length > 1){
    deleAll.classList.remove("hidden");
  }else{
    deleAll.classList.add("hidden")
  }
}

function deleteAllItems(){
  localStorage.clear();
  dataStore=[];
  addToCard()

}

//result of price

function totalPrice(){
  let myResult= document.querySelector(".total-result");
  let checkPrice= document.querySelector(".check-price");
  let totalOut = document.querySelector(".total-price");
  let result = 0;
  for(let i=0 ; i<dataStore.length ; i++){
    result = result + dataStore[i].price;
   
  }
  myResult.innerHTML=`${result} $`
  totalOut.innerHTML=`${result} $`
  if(checkPrice){
       checkPrice.innerHTML=`${result} $`
  }
}

//mega menu
function openMenu(){
  let megaMenu = document.querySelector(".megaMenu");
  megaMenu.classList.toggle("hidden");
  

  megaMenu.classList.toggle("fixed");

}


addToCard ();

closeTap ();
numberOfItems();
