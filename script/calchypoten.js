let twoSides = document.querySelectorAll(".side-input");
let submitBtn = document.querySelector("#btn-check");
let outputDiv = document.querySelector("#output-div")

submitBtn.addEventListener("click" , (event) => {
  event.preventDefault();
    let a = twoSides[0] ;
    let b = twoSides[1] ;

    if(a.value == "" || b.value == "" || a.value <=0 || b.value <=0 ){
      outputDiv.innerHTML = "<h2>Enter valid input </h2>"
    }
    else
    {
        let c = Math.sqrt(Math.pow(a.value , 2) + Math.pow(b.value , 2 )).toFixed(2) ;
        
        console.log(Math.pow(a.value , 2)) ;
        console.log(Math.pow(b.value , 2))
        outputDiv.innerHTML = `<h2>Hypotenuse is ${c} </h2>`
    }
})