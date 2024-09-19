const model = require("../Models/query");
const path = require("path")

//client side controls

exports.getAllItems = (req, res) => {
  model.getAllItems((err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.orderedItems = (req, res) => {
  model.orderedItems(req, (err, result) => {
    if (err) throw err;
    res.json({ message: "Order Placed" });
  });
};

exports.orderedStatus =(req , res)=>{
  model.orderedStatus(req , (err , result)=>{
    if(err) throw err;
    res.json(result)
  })
}

//admin side controls

exports.allItem = (req, res) => {
  model.allItem((err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.createItem = (req, res) => {
  model.createItem(req, (err, result) => {
    if (err) throw err;
    res.json({ message: "Successfully Created" });
  });
};

exports.readItem = (req, res) => {
  model.readItem(req, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.updateItem = (req, res) => {
  model.updateItem(req, (err, result) => {
    if (err) throw err;
    res.json({ message: "Successfully Updated" });
  });
};

exports.deleteItem = (req, res) => {
  model.deleteItem(req, (err, result) => {
    if (err) throw err;
    res.json({ message: "Successfully Deleted" });
  });
};
//to get client's orders info
exports.cartItems = (req, res) => {
  model.cartItems((err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
//to display image

exports.showImage = (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, "..", "public", filename);

  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    }
  });
};