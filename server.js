require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json())

/*
TODO: Product Inventory Routes
  - Add product (POST)
  - Edit product (PUT/PATCH)
  - Delete product (DELETE)
  - Fetch products (GET)
*/


app.listen(PORT , () =>{
     console.log(`Message : Server is listening on port ${PORT}`)
})