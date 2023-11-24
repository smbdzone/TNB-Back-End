const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes"); // Remove the function invocation
require("./db");
const port = 4500;

// Middlewares
app.use(cors());
app.use(express.json());

const array = require("./products.json");

function extractSubcategories(products, mainCategorySku) {
    const brands = new Set();

  // Iterate through each product
  products.forEach((product) => {
    if(product.brand?.sku){
        // Check if the product has the specified mainCategory
        const hasMainCategory = product.mainCategory.some(
          (mainCategory) => mainCategory.sku === mainCategorySku
        );
    
        // If the product has the specified mainCategory, add a string representation of the brand to the set
        if (hasMainCategory) {
          const brandString = `${product.brand.name}-${product.brand.sku}`;
          brands.add(brandString);
        }
    }
  });

  // Convert the set of string representations back to an array of brand objects
  return Array.from(brands, (brandString) => {
    const [name, sku] = brandString.split('-');
    return { name, sku };
  });
}

console.log(extractSubcategories(array, "gifts"));

app.use("/api/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app
