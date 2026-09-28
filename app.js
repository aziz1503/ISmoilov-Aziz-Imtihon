const express = require("express");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use("/products", productRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


