const htmlCart = document.getElementById("cart");
const htmlBtnOpenCart = document.getElementById("btn-open-cart");
const htmlBtnCloseCart = document.getElementById("btn-close-cart");

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
