const express = require('express');
const router = express.Router();

const UserController = require("../controllers/userController")

const commonMW = require("../middlewares/commonMiddlewares")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})






router.post("/createUser", commonMW.mid5, UserController.createUser)


router.post("/CreateProduct", productController.CreateProduct)
router.post("/CreateOrder",  commonMW.mid5,orderController.createOrder)

module.exports = router;