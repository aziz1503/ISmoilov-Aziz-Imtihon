function validateProduct(req, res, next) {
  const { name, brand, category, stock, price } = req.body;

  const errors = [];

  if (typeof name !== "string" || name.trim().length < 2) {
    errors.push("name is required (min 2 chars)");
  }

  if (typeof brand !== "string" || brand.trim().length < 2) {
    errors.push("brand is required (min 2 chars)");
  }

  const categories = ["Electronics", "Clothing", "Food"];

  if (!categories.includes(category)) {
    errors.push(
      "category must be one of: Electronics, Clothing, Food"
    );
  }

  if (!Number.isInteger(stock) || stock < 0 || stock > 10000) {
    errors.push(
      "stock must be an integer between 0 and 10000"
    );
  }

  if (typeof price !== "number" || price <= 0) {
    errors.push(
      "price must be a positive number"
    );
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors
    });
  }

  next();
}

module.exports = validateProduct;

