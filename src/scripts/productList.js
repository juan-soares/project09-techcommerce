import dataProductList from "../lib/data.js";

const htmlMainContent = document.querySelector("main");

function createProductCart(productInfo) {
  const htmlProductList = document.createElement("ul");
  const productCard = document.createElement("li");

  htmlProductList.appendChild(productCard);
}

export default function renderProductList() {
  for (const product in dataProductList) {
    createProductCart(product);
  }
}
