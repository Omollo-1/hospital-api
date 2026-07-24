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

// app.put("inventory/:id", (req, res) => {
//     res.send('item updated successfully');   
// });

app.put("/inventory/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { name, qty } = req.body || [];

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Request body is missing or empty. Send JSON with name and/or qty fields.' });
        }

        const item = hospitalitems.find(item => item.id === parseInt(id));

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        if (name !== undefined) item.name = name;
        if (qty !== undefined) item.qty = qty;

        res.status(200).json({ message: 'Item updated successfully', item });
    } catch  (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
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