import Cart from "../model/cart.js";
import Products from "../model/product.js";
import { fetchData } from "../utils/httpRequest.js";

const productsNodes = document.getElementById("product");
const cartListNodes = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price").querySelector("span");
const emptyTag = document.getElementById("empty");

async function render() {
  const productData = await fetchData();
  const cartInstance = new Cart(cartListNodes, totalPrice);
  const productInstance = new Products(
    productsNodes,
    productData,
    cartInstance
  );
  productInstance.showCard();
}

document.addEventListener("DOMContentLoaded", render);
