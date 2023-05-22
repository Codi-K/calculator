// display-screen 
let result = document.querySelector("#display-screen");
let checkerArray = [];

function display(value) {
    result.value
    += value;
}


// backspace
document.querySelector(".backspace").
addEventListener("click", ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})

// clear
document.querySelector(".clearAll").
addEventListener("click", ()=>{
    let output = result.value;
    result.value = output.slice(output.length);
})

// addition, subtraction, division & multiplaction
document.querySelectorAll('.operators').forEach( (ops)=>{
    ops.addEventListener('click', (e)=>{
        result.value += e.target.innerText
    })
})

//equal 
document.querySelector('.math5').
    addEventListener('click', (e)=>{
        result.value = eval(result.value).toFixed(2);
})

// keeping only 1 decimal point
function display (value){
 if (value == "." && checkerArray.includes(".")){
    return
 }else if(value == "/" || value == "*" || value == "-" || value == "+") {
 } else {
    result.value += value;
    checkerArray.push(value);
 }
}
