let buttons = document.querySelectorAll(".btn");
let heading = document.querySelector(".heading");
let info = document.querySelector(".info");
let image = document.querySelector(".image");
buttons.forEach((btn) => {
  btn.onclick = function () {
    let headId = btn.getAttribute("data-id");
    heading.innerHTML = headId;
    info.innerHTML = "Salam";
    heading.innerHTML = headId;
    btn.style.backgroundColor = "rgb(67, 177, 180";
  };
});
