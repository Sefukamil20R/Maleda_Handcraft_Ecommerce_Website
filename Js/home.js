document.addEventListener("DOMContentLoaded", function () {
  var createButton = document.querySelector(".create");
  var loginButton = document.querySelector(".login");
  var checkoutbutton = document.querySelector(".buttonCheckout");

  createButton.addEventListener("click", function () {
    window.location.href = "./signup.html";
  });

  loginButton.addEventListener("click", function () {
    window.location.href = "./login.html";
  });
  checkoutbutton.addEventListener("click", function () {
    window.location.href = "./crediet.html";
  });
  
});
const dropdownBtn = document.querySelector(".nav-dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

