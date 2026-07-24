require("dotenv").config();
const express = require("express");
const hospitalitems = require("./hospitalitems");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to the Hospital Product Inventory API!");
});

app.get("/inventory", (req, res)=>{
    res.status(200).json(hospitalitems);
});


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