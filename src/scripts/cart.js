const htmlCart = document.getElementById("cart");
const htmlBtnOpenCart = document.getElementById("btn-open-cart");
const htmlBtnCloseCart = document.getElementById("btn-close-cart");
const htmlCartProductList = document.getElementById("cart-product-list");

function toggleCartVisibility() {
  htmlCart.classList.toggle("cart--visible");
}

export default function cartListeners() {
  htmlBtnOpenCart.addEventListener("click", () => {
    toggleCartVisibility();
  });

  htmlBtnCloseCart.addEventListener("click", () => {
    toggleCartVisibility();
  });
}

export function addProductToCart(selectedProduct) {
  const productInfo = `<li>
  <img alt="Imagem do produto ${selectedProduct.title}." src=${selectedProduct.image} />
  <p>${selectedProduct.title} (${selectedProduct.brand})</p>
  <p>$ ${selectedProduct.cost}</p>
  <button id="btn-">
    <i class="fa-solid fa-circle-xmark"></i>
  </button>
</li>
`;

  htmlCartProductList.innerHTML += productInfo;
}
