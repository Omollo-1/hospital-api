require("dotenv").config();

const fs = require("fs");
const path = require("path");

const express = require("express");

const DATA_FILE = path.join(__dirname, "hospitalitems.json");
let hospitalitems = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

const app = express();

const PORT = process.env.PORT || 3000;

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
    success: false,
    message: "Hospital item not found. Please check the item ID and try again."
        });
    }

   res.status(200).json({
    success: true,
    message: "Hospital item retrieved successfully.",
    item
});
});
// Add a new hospital item
app.post("/items", (req, res) => {

    const { name, qty } = req.body;

    if (!name || qty === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name and quantity are required."
        });
    }
const maxId = Math.max(...hospitalitems.map(item => item.id), 0);
    const newItem = {
        id: maxId + 1,
        name,
        qty
    };

    hospitalitems.push(newItem);

    saveItems();

    res.status(201).json({
        success: true,
        message: "Hospital item added successfully.",
        item: newItem
    });

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
    if (qty !== undefined) item.qty = qty;

    saveItems();

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
  
  if (hospitalitems.length === initialLength) {
    return res.status(404).json({ 
        success: false,
        message: "Hospital item not found" });
  }
saveItems(); 
  res.status(200).json({ 
    success: true,
    message: "Hospital item deleted successfully" });
})



app.listen(PORT, () => {
    console.log(`Message : Server is listening on port ${PORT}`)
})