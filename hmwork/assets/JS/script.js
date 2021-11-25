let buttons = document.querySelectorAll(".btnn");
buttons.forEach((button) => {
  button.onclick = function () {
    let dataId = button.getAttribute("dataid");
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    let content = document.getElementById(dataId);
    let contents = document.querySelectorAll(".city");
    contents.forEach((cty) => {
      cty.classList.add("d-none");
    });
    button.classList.add("active");
    content.classList.remove("d-none");
  };
});
