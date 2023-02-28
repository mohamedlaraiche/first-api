const Cart = require("../models/cart");

const getCart = (req, res) => {
  Cart.find()
    .then((cart) =>
      res.status(200).json({
        message: " The Cart has beed showed",
        cart,
      })
    )
    .catch((err) =>
      res.status(400).json({
        message: "ERROR",
        error: err.message,
      })
    );
};
const setCart = (req, res) => {
  Cart.create(req.body)
    .then((data) =>
      res.status(201).json({
        message: "Cart has been created",
        data,
      })
    )
    .catch();
};
const updateCart = (req, res) => {
  Cart.findByIdAndUpdate(req.params.id, req.body)
    .then((data) =>
      res.status(200).json({
        message: "Data has been updated",
        data,
      })
    )
    .catch((err) =>
      res.status(400).json({
        message: "NOT VALID",
        error: err.message,
      })
    );
};
const deleteCard = (req, res) => {
  Cart.findByIdAndRemove(req.params.id, req.body)
    .then((data) =>
      res.status(201).json({
        message: "Data has been deleted",
        data,
      })
    )
    .catch((err) =>
      res.status(400).json({
        message: "CAN'T PROCESS",
        error: err.message,
      })
    );
};

module.exports = {
  getCart,
  setCart,
  updateCart,
  deleteCard,
};
