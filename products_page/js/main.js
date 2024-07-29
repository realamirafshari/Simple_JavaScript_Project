const searchInput = document.getElementById("search-input-name");
const products = document.querySelectorAll(".card-product");
const buttons = document.querySelectorAll(".filter");
const priceSearchInput = document.getElementById("search-input-price");
const priceSearchButton = document.getElementById("search-price");

/*search name */
const searcHandeler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
    console.log(productName);
  });
};
searchInput.addEventListener("keyup", searcHandeler);

/*add event to filter button */

buttons.forEach((button) => {
  button.addEventListener("click", filterHandeler);
});

function filterHandeler(event) {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      if (filter === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
}

function changeClass(filter) {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

/*Search Item With Price */

priceSearchButton.addEventListener("click", priceHandeler);

function priceHandeler(event) {
  const priceValue = priceSearchInput.value;
  products.forEach((product) => {
    const productPrice = product.children[2].innerText.toLowerCase();
    const priceSplit = productPrice.split(" ");
    const price = priceSplit[0];
    if (priceValue === "") {
      priceValue.focus();
    } else {
      if (price === priceValue) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
}
