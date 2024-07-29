class Cart {
  constructor(parent, price) {
    this.parent = parent;
    this.price = price;
    this.products = [];
    this.toShow = [];
    this.parent.addEventListener("click", this);
  }
  showCard() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, qty);
    });
  }
  createCard(data, qty) {
    const cardElement = document.createElement("div");
    const imgElement = this.productImg(data);
    const infoElement = this.productInfo(data);
    const controlElement = this.productControl(data, qty);
    cardElement.innerHTML = imgElement;
    cardElement.innerHTML += infoElement;
    cardElement.innerHTML += controlElement;
    this.parent.appendChild(cardElement);
  }
  productImg(data) {
    const { src, alt } = data;
    const imageJSX = `<img src=${src} class="product-img-shop" alt=${alt}/>`;
    return imageJSX;
  }
  productInfo(data) {
    const { name, price } = data;
    const infoJSX = `
    <div class="info">
      <h3>${name}</h3>
      <p>$ <span>${price}</span></p>
    </div>`;

    return infoJSX;
  }
  productControl(data, qty) {
    const { id } = data;
    const controlJSX = `
    <div class="action-box">
      <div class="action-button">
        <button data-id=${id}>+</button>
        <span>${qty}</span>
        <button data-id=${id}>-</button>
      </div>
      <div class="remove-button">
        <button data-id=${id}>Remove</button>
      </div>
    </div>`;

    return controlJSX;
  }
  handleEvent(event) {
    const tagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.innerText;
    if (tagName !== "BUTTON") return;

    switch (type) {
      case "+":
        this.plusButton(id);
        break;
      case "-":
        this.minusButton(id);
        break;
      case "Remove":
        this.removeButton(id);
        return;
    }
  }
  plusButton(id) {
    const product = this.products.find((p) => p.id === +id);
    this.products.push(product);
    this.showCard();
  }
  minusButton(id) {
    const index = this.products.findIndex((p) => (p.id = id));
    this.products.splice(index, 1);
    this.showCard();
  }
  removeButton(id) {
    const newProduct = this.products.filter((p) => p.id !== +id);
    this.products = newProduct;
    this.showCard();
  }
}
export default Cart;
