const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)


router.post("/getBooksInYears",BookController.getBooksInYears)


router.post("/booklist", BookController.booklist  )

router.post("/getXINRBooks", BookController.getXINRBooks )

router.post("/getRandomBooks", BookController.getRandomBooks )


router.post("/particularBooks",BookController.particularBooks)
module.exports = router;