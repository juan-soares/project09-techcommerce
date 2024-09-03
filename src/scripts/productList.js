import { addProductToCart } from "./cart.js";

const productList = [
  {
    id: 1,
    title: "Casaco",
    brand: "Front-End",
    cost: 0,
    image: "front-end.jpg",
  },
  {
    id: 2,
    title: "Casaco",
    brand: "Back-End",
    cost: 0,
    image: "back-end.jpg",
  },
];

const htmlProductList = document.getElementById("product-list");

export default function generateCards() {
  for (const product of productList) {
    const productCard = `<div id="product-info-${product.id}">
    <img
      src="./public/assets/img/${product.image}"
      alt="Imagem do produto ${product.title}."
    />
    <p>${product.brand}</p>
    <p>${product.title}</p>
    <p>$${product.cost}</p>
    <button id="btn-add-to-cart-${product.id}">Adicionar</button>
    </div>
    `;
    htmlProductList.innerHTML += productCard;
  }

  for (const product of productList) {
    const htmlBtnAddToCart = document.getElementById(
      `btn-add-to-cart-${product.id}`
    );
    htmlBtnAddToCart.addEventListener("click", () => addProductToCart(product));
  }
}
