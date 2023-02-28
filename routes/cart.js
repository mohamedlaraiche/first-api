const express = require("express");
const router = express.Router();
const {
  getCart,
  setCart,
  updateCart,
  deleteCard,
} = require("../controllers/cart");

router.get("/", getCart);
router.post("/", setCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCard);

module.exports = router;
