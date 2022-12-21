let angleOne = document.querySelector("#angle-one");
let angleTwo = document.querySelector("#angle-two");
let angleThree = document.querySelector("#angle-three");
let submitBtn = document.querySelector("#submit-btn");

let outputDiv = document.querySelector("#output-div");

function isTriangle(){
    //console.log(( Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value) ).toFixed(2))
    return ( Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value) ).toFixed(2) === 180.00 ;
}

submitBtn.addEventListener("click", () =>{
    if(angleOne.value === "" || angleTwo.value === "" || angleThree.value === ""){
        outputDiv.innerHTML = "<h2>Please fill all the input field</h2>"
    }
    else if(angleOne.value <= 0 || angleTwo.value <= 0 || angleThree.value <= 0 ) {
        outputDiv.innerHTML ="<h2>Please enter positive non-zero angle </h2>" ;

    }
    else{
       if(isTriangle() ){
         outputDiv.innerHTML = "<h2>Yay, the angles form a triangle!</h2>" ;
       }
       else
         outputDiv.innerHTML = "<h2>The angle doesn't form a triangle</h2>" ;
    }
})

