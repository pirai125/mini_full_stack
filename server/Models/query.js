const db = require("../Config/database");

//client side Query

exports.getAllItems = (callback) => {
  db.query("select * from admin ", callback);
};

exports.orderedItems = (req, callback) => {
  const values = req.body.map((item) => {
    const { p_id, product_name, product_price, quantity } = item;
    return [p_id, product_name, product_price, quantity];
  });
  db.query(
    "INSERT INTO client (`p_id`, `p_name`, `p_amount`, `quantity`) VALUES ?",
    [values],
    callback
  );
};




exports.orderedStatus = (req, callback) => {
  const id = req.params.id;
  const values = [req.body.status, id];
  db.query("UPDATE `client` SET `status`= ? WHERE id=?", values, callback);
};
//admin side Query
exports.allItem = (callback) => {
  db.query("select * from admin ", callback);
};

exports.createItem = (req, callback) => {
  if (!req.file) {
    return console.log("File upload failed");
  }
  const values = [
    req.body.p_id,
    req.body.product_name,
    req.body.product_price,
    req.body.description,
    req.body.available_status,
    req.file.filename,
  ];

  db.query(
    "insert into admin (`p_id`, `product_name`, `product_price`, `description`, `available_status`, `product_image`) VALUES (?)",
    [values],
    callback
  );
};
exports.readItem = (req, callback) => {
  const id = req.params.id;
  db.query(`select * from admin where id =?`, [id], callback);
};

exports.updateItem = (req, callback) => {
  const id = req.params.id;
  const values = [
    req.body.product_name,
    req.body.product_price,
    req.body.description,
    req.body.available_status,
    id,
  ];
  db.query(
    "UPDATE `admin` SET `product_name`= ?,`product_price`= ?,`description`= ? ,`available_status`= ? WHERE id = ?",
    values,
    callback
  );
};

exports.deleteItem = (req, callback) => {
   const id = req.params.id;
  db.query("DELETE FROM `admin` WHERE id = ?", [id], callback);
};

//to get client's orders info
exports.cartItems = (callback) => {
  db.query("select * from client ", callback);
};

