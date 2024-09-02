const productList = [
  {
    id: 1,
    title: "Casaco",
    brand: "Front-End",
    cost: 0,
    image: "product-1.jpg",
  },
];

const htmlProductList = document.getElementById("product-list");

for (const product of productList) {
  const productCard = `<div id="product-info-">
  <img
    src="./public/assets/img/${product.image}"
    alt="Imagem do produto ${product.title}."
  />
  <p>${product.brand}</p>
  <p>${product.title}</p>
  <p>$${product.cost}</p>
  <button>Adicionar</button>
  </div>
  `;

  htmlProductList.innerHTML = productCard;
}
