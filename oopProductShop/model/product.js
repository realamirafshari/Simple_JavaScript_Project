class Products {
  constructor(parent, products, cart) {
    this.parent = parent;
    this.products = products;
    this.cart = cart;
    this.parent.addEventListener("click", this);
  }
  showCard() {
    this.products.forEach((item) => this.createCard(item));
  }
  createCard(data) {
    const cardElement = document.createElement("div");
    const image = this.pruductImg(data);
    const info = this.pruductInfo(data);
    // const productName = document.createElement("h3");
    // const control = document.createElement("div");
    // const price = document.createElement("span");
    // const button = document.createElement("button");
    // productName.innerText = data.name;
    // price.innerText = data.price;
    // button.innerText = "+";
    // control.append(price, button);
    // info.append(productName, control);
    cardElement.innerHTML = image;
    cardElement.innerHTML += info;
    this.parent.appendChild(cardElement);
  }
  pruductImg(data) {
    const { src, alt } = data;
    const imageJSX = `<img src=${src} class="product-cart-img" alt=${alt}/>`;
    return imageJSX;
  }
  pruductInfo(data) {
    const { id, name, price } = data;
    const infoJSX = `
    <div class="product-info">
      <h3>${name}</h3>
        <div class="action-card">
          <span>${price}</span>
          <button data-id=${id}>+</button>
        </div>
    </div>    `;
    return infoJSX;
  }
  handleEvent() {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }
  addToCart(id) {
    const product = this.products.find((i) => i.id === +id);
    this.cart.products.push(product);
    this.cart.showCard();
  }
}

export default Products;
