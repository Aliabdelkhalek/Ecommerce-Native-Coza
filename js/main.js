// start click icon menu
let navbar = document.getElementById("navbar");
let bar = document.getElementById("bar");
let close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", function () {
    navbar.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}
// end click icon menu
//=================================================================================
// start change image in single product
let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("smallImg");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", function () {
    mainImg.src = smallImg[i].src;
  });
}
// end change image in single product
//=================================================================================
// start dark mood
let themeButton = document.getElementById("them_button");
let darkTheme = "dark_theme";
let iconTheme = "fa-regular fa-sun";
let iconThemeMoon = "fa-regular fa-moon change-them";

themeButton.addEventListener("click", function () {
  document.body.classList.toggle(darkTheme);
  if (document.body.hasAttribute("class", darkTheme)) {
    themeButton.setAttribute("class", iconTheme);
  } else {
    themeButton.setAttribute("class", iconThemeMoon);
  }
});
// end dark mood
//=================================================================================
//start login from toggle
let login = document.querySelector(".login-form");
let loginIcon = document.getElementById("userIcon");
let closeIcon = document.getElementById("closeCart");

if (loginIcon) {
  loginIcon.addEventListener("click", function () {
    login.classList.add("active");
  });
}

if (closeIcon) {
  closeIcon.addEventListener("click", function () {
    login.classList.remove("active");
  });
}
//end login from toggle
//=================================================================================
// start slider in home page
let mySlide = document.querySelectorAll(".my-slider");
let dot = document.querySelectorAll(".dot");

let counterSlide = 1;
slideFun(counterSlide);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counterSlide += 1;
  slideFun(counterSlide);
}

function plusSlides(n) {
  counterSlide += n;
  slideFun(counterSlide);
  resetTimer();
}

function currentSlide(n) {
  counterSlide = n;
  slideFun(counterSlide);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slideFun(n) {
  let i;
  for (i = 0; i < mySlide.length; i++) {
    mySlide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
  if (n > mySlide.length) {
    counterSlide = 1;
  }
  if (n < 1) {
    counterSlide = mySlide.length;
  }
  mySlide[counterSlide - 1].style.display = "block";
  dot[counterSlide - 1].classList.add("active");
}

// end slider in home page
//=================================================================================
// start on click in card single product
let cardProduct = document.querySelectorAll(".card .imaga");

for (let i = 0; i < cardProduct.length; i++) {
  cardProduct[i].addEventListener("click", function () {
    window.location.href = "singleProduct.html";
  });
}
// end on click in card single product
//=================================================================================
// start click icon cart menu
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close_cart");

// open cart
cartIcon.addEventListener("click", openCart);

function openCart() {
  cart.classList.add("active");
}

// close cart
closeCart.addEventListener("click", function () {
  cart.classList.remove("active");
});
// end click icon cart menu
//=================================================================================
// cart working js
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// making function
function ready() {
  // remove Item from cart
  let removeItemButtons = document.getElementsByClassName("cart_remove");

  for (let i = 0; i < removeItemButtons.length; i++) {
    let button = removeItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  // quantity Changes
  let quantityInputs = document.getElementsByClassName("cart_quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  //add to cart
  let addCart = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
}

//remove Item From cart
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

//quantity changes
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}
//=================================================================================
//start add to cart

let cartItems = document.querySelector(".cart_content");

function addCartClicked() {
  let smallCardArrS = productContainer;
  let productFolder = "";
  for (let i = 0; i < smallCardArrS.length; i++) {
    productFolder += `
    <div class="cart_box">
    <img src="${smallCardArrS[i].img}" alt="" class="cart_img" />
    <div class="detail_box">
      <div class="cart_product_title">${smallCardArrS[i].name}</div>
      <div class="cart_price">${smallCardArrS[i].price}</div>
      <input type="number" value="1" class="cart_quantity"/>
    </div>
    <i class="fa-solid fa-trash cart_remove"></i>
  </div>`;
  }
  cartItems.innerHTML = productFolder;
  openCart();
}
//end add to cart
//=================================================================================
function check() {
  Swal.fire("Good job!", "Added successfully", "success");
  setTimeout(openCart, 1000);
}
//=================================================================================

// start update total

function updateTotal() {
  let cartContent = document.getElementsByClassName("cart_content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart_box");
  let total = 0;

  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart_price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart_quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  // if price contain some cents value
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total_price")[0].innerText = "$" + total;
}
// end update total
//=================================================================================
// start click in button header and "back to top "
let header = document.getElementById("header");

window.onscroll = function () {
  if (scrollY > 300) {
    header.classList.add("headerFixed");
    backToTop.classList.remove("showBtn");
  } else {
    header.classList.remove("headerFixed");
    backToTop.classList.add("showBtn");
  }
};

let backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", upToTop);
function upToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}
//end click in button header and "back to top "
//=================================================================================
// start adding data to local storage
let addToCartBtn = Array.from(document.querySelectorAll(".add-cart"));
let productContainer;

if (localStorage.getItem("ourProduct") == null) {
  productContainer = [];
} else {
  productContainer = JSON.parse(localStorage.getItem("ourProduct"));
  // displayProduct()
  addCartClicked();
}

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", function () {
    addCardToShop(addToCartBtn[i]);
  });
}
function addCardToShop(btn) {
  console.log(btn.parentElement);

  let cardItem = btn.parentElement;
  let cardImg = cardItem.querySelector(".product-img").src;
  let cardTitle = cardItem.querySelector(".product-title").textContent;
  let cardPrice = cardItem.querySelector(".price").textContent.slice(1);

  let item = {
    id: Date.now(),
    img: cardImg,
    name: cardTitle,
    price: cardPrice,
    no: 1,
  };

  productContainer.push(item);
  localStorage.setItem("ourProduct", JSON.stringify(productContainer));
  addCartClicked();
  check();
}
// end adding data to local storage
//=================================================================================
