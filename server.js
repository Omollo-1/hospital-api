require("dotenv").config();

const fs = require("fs");
const path = require("path");

const express = require("express");

const DATA_FILE = path.join(__dirname, "hospitalitems.json");
let hospitalitems = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

const app = express();

const PORT = process.env.PORT || 5000;

function saveItems() {
    fs.writeFileSync(DATA_FILE, JSON.stringify(hospitalitems, null, 2));
}

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to the Hospital Product Inventory API!");
});

app.get("/inventory", (req, res)=>{
    res.status(200).json(hospitalitems);
});

// / GET /items - View all hospital items
app.get("/items", (req, res) => {
    res.json(hospitalitems);
});

//Search for a hospital item by ID
app.get("/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const item = hospitalitems.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            error: "Hospital item not found"
        });
    }

    res.status(200).json(item);
});

app.put("/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, qty } = req.body;

    const item = hospitalitems.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Hospital item not found"
        });
    }

    if (name) item.name = name;
    if (qty) item.qty = qty;

    res.status(200).json({
        success: true,
        message: "Hospital item updated successfully",
        item
    });
});

app.delete("/items/:id" , (req , res) =>{
  const id = Number(req.params.id);
  const initialLength = hospitalitems.length;

  hospitalitems = hospitalitems.filter((t) => t.id !== id);
  saveItems(); 
  if (hospitalitems.length === initialLength) {
    return res.status(404).json({ 
        success: false,
        message: "Hospital item not found" });
  }

  res.status(200).json({ 
    success: true,
    message: "Hospital item deleted successfully" });
})
/*
TODO: Product Inventory Routes
  - Add product (POST)
  - Edit product (PUT/PATCH)
  - Delete product (DELETE)
  - Fetch products (GET)
*/


app.listen(PORT, () => {
    console.log(`Message : Server is listening on port ${PORT}`)
})