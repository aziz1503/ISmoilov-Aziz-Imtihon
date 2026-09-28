const express = require("express");
const upload = require("../middlewares/upload");
const productController = require("../controllers/product.controller");
const validateProduct = require("../middlewares/validateProduct");

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post("/", validateProduct, productController.createProduct);

router.put("/:id", validateProduct, productController.updateProduct);


module.exports = router;