const express = require("express");
const controls = require("../Controller/controls");
const upload = require("../Middleware/fileuploader")

const route = express.Router();
//client side routing
route.get("/home", controls.getAllItems);
route.post("/order", controls.orderedItems);
route.put("/status/:id",controls.orderedStatus)

//admin side routing
route.get("/items", controls.allItem);
route.post("/create", upload.single("product_image"), controls.createItem);
route.get("/read/:id", controls.readItem);
route.put("/update/:id", controls.updateItem);
route.delete("/delete/:id", controls.deleteItem);
//to get client's orders info
route.get("/cartItems", controls.cartItems);

//to display image
route.get("/image/:filename", controls.showImage);

module.exports = route;
