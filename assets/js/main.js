// this is for changing the theme
function mode() {
  let body = document.querySelector("#body");
  let mode = body.getAttribute("data-mode");
  
  if (mode == "normal") {
    body.setAttribute("data-mode", "night");
  } else {
    body.setAttribute("data-mode", "normal");
  }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", mode);


// calculatir functionality
let resultScreen = document.querySelector("#result_screen");

function show(n){
  if (resultScreen.innerHTML == "0"){
    resultScreen.innerHTML = n; 
  }else{
    resultScreen.innerHTML += n;
  }
}

// Calculation function

function calculate(n) {
   resultScreen.innerHTML = eval(resultScreen.innerHTML); 
}

// clear function
function clearScreen() {
  resultScreen.innerHTML = 0;
}

// clear one step back

function clearBlack(){
  if (resultScreen.innerHTML.length > 1) {
    resultScreen.innerHTML = resultScreen.innerHTML.slice(0, -1)
  }
    
}

// function for the dot

const dot = document.querySelector(".dot");
dot.addEventListener("click", showDot);

function showDot(){
if (resultScreen.innerHTML.includes('.')) {
  dot.classList.add("is-depressed");
}else{
  resultScreen.innerHTML += '.';
}
}


// wait for me here
// else{
//      resultScreen.innerHTML = resultScreen.innerHTML.slice(0, -1)
//   }