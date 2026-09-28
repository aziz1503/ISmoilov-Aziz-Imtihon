const productService = require("../services/product.service");

function getProducts(req, res) {
  const products = productService.getProducts();

  res.status(200).json({
    success: true,
    data: products
  });
}

function getProductById(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid product id"
    });
  }

  const product = productService.getProductById(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
}

function createProduct(req, res, next) {
  try {
    const product = productService.createProduct(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
}



function updateProduct(req, res, next) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product id"
      });
    }

    const product = productService.updateProduct(id, req.body);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
}





module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct
};