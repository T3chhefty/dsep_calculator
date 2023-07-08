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
