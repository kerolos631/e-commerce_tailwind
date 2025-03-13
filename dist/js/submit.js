const scriptUrl = "https://script.google.com/macros/s/AKfycbweSq3Hx3a_iJ7TB4IOmVNoyyw9psbZZ7jaBenojmxwa1V8DWbv0AWJZxAbPT7o5xtb/exec";
 let myForm = document.querySelector("#myOrder");
  let submitBtn = document.querySelector(".submit-btn");


  submitBtn.addEventListener('click' , function(){
    let myPop = document.querySelector(".popup");
    myPop.classList.toggle('hidden');
    myPop.classList.toggle('fixed')

  })



 myForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    fetch(scriptUrl , {
        method:"post" , 
        body : new FormData(myForm) ,

    })
    .then((response) => {
        setTimeout(() =>{
            //clear products
            localStorage.clear();
            window.location.reload();
        },1000)
    })
    .catch((error)=> console.error("error" , error.message))
 } )
