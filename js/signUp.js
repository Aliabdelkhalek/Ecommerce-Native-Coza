let signUpButton = document.getElementById("signUp");
let signInButton = document.getElementById("signIn");
let container2 = document.getElementById("container2");

signUpButton.addEventListener("click", function () {
  container2.classList.add("right-panel-active");
});

signInButton.addEventListener("click", function () {
  container2.classList.remove("right-panel-active");
});

