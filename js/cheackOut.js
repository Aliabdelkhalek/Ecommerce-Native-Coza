let newArray = JSON.parse(localStorage.getItem("ourProduct"));
let subTotal = document.getElementById("subTotal");
let subTotalTwo = document.getElementById("subTotalTwo");
let counterDisplay = document.querySelector(".counter_display");


// start display Product 
function displayProduct() {
  counterDisplay.innerHTML = newArray.length;
  let boxItems = "";

  for (let i = 0; i < newArray.length; i++) {
    boxItems += `<tr>
  <td><i class="fa-solid fa-circle-xmark" onclick ="removeRow(${i})"></i></td>
  <td><img src="${newArray[i].img}" alt="IMG"></td>
  <td>${newArray[i].name}</td>
  <td>$${newArray[i].price}</td>
  <td>
  <button class="plus-product" onclick="incrementCount(${i})">+</button>
  ${newArray[i].no}
  <button class="plus-product" onclick="decrementCount(${i})">-</button>
  </td>
  <td class="all_total">$${newArray[i].price * newArray[i].no} </td>
  </tr>`;
  }
  let cardBox = document.querySelector(".tBody");
  cardBox.innerHTML = boxItems;
  getProductsTotal();
}
displayProduct();

// end display Product 
//==================================================================
//start remove row
function removeRow(i) {
  newArray.splice(i, 1);
  localStorage.setItem("ourProduct", JSON.stringify(newArray));
  displayProduct();
}
//end remove row
//==================================================================
// start search function
function searchProduct(term) {
  let boxItems2 = "";

  for (let i = 0; i < newArray.length; i++) {
    if (
      newArray[i].name.toLowerCase().includes(term.toLowerCase().trim()) == true
    ) {
      boxItems2 += `<tr>
          <td><i class="fa-solid fa-circle-xmark" onclick ="removeRow(${i})"></i></td>
          <td><img src="${newArray[i].img}" alt="IMG"></td>
          <td>${newArray[i].name}</td>
          <td>$${newArray[i].price}</td>
          <td><input type="number" value="1" ></td>
          <td>$${newArray[i].price}</td>
          </tr>`;
    }
    let cardBox = document.querySelector(".tBody");
    cardBox.innerHTML = boxItems2;
  }
}
// end search function
//==================================================================
//start increment Count plus
function incrementCount(i) {
  newArray[i].no += 1;

  //set newArray to local storage
  localStorage.setItem("ourProduct", JSON.stringify(newArray));
  // call the display function
  displayProduct();
}
//end increment Count plus
//==================================================================
//start decrement Count mines
function decrementCount(i) {
  newArray[i].no -= 1;

  //set newArray to local storage
  localStorage.setItem("ourProduct", JSON.stringify(newArray));
  // call the display function
  displayProduct();
}
//end decrement Count mines
//==================================================================
// start get sub total
  function getProductsTotal() {
  let result = 0;
  for (let index = 0; index < newArray.length; index++) {
    result += newArray[index].price * newArray[index].no;
  }
  subTotal.innerText = result ; 
  subTotalTwo.innerText = result ; 
}
// end get sub total
//==================================================================
