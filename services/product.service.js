const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../database/data.json");

function getProducts() {
  const data = fs.readFileSync(dataPath, "utf-8");

  return JSON.parse(data);
}

function getProductById(id) {
  const products = getProducts();

  return products.find(product => product.id === id);
}

function createProduct(productData) {
  const products = getProducts();

  const maxId = products.reduce(
    (max, product) => Math.max(max, product.id),
    0
  );

  const newProduct = {
    id: maxId + 1,
    name: productData.name,
    brand: productData.brand,
    category: productData.category,
    stock: productData.stock,
    price: productData.price,
    image: null
  };

  products.push(newProduct);

  fs.writeFileSync(
    dataPath,
    JSON.stringify(products, null, 2)
  );

  return newProduct;
}

function updateProduct(id, productData) {
  const products = getProducts();

  const index = products.findIndex(
    product => product.id === id
  );

  if (index === -1) {
    return null;
  }

  products[index] = {
    ...products[index],
    name: productData.name,
    brand: productData.brand,
    category: productData.category,
    stock: productData.stock,
    price: productData.price
  };

  fs.writeFileSync(
    dataPath,
    JSON.stringify(products, null, 2)
  );

  return products[index];
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct
};