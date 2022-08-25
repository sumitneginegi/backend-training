const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const propertyController= require("../controllers/propertyController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createbook", bookController.createbook  )

router.get("/getbookData", bookController.getbookData)

router.get("/getbookWithAuthorDetails", bookController.getbookWithAuthorDetails)

router.get("/abc", bookController.abc)

// router.get("/abc", bookController.abc){
//     console.log("URL: ", req.originalUrl);
//     res.send(req.originalUrl);
//  };



 //Importing the express
//var express = require('express');

// Initializing the express and port number
var app = express();

// Initializing the router from express

var PORT = 3000;

// Defining an Endpoint
app.get('/api', function (req, res) {
   console.log("URL: ", req.originalUrl);
   res.send(req.originalUrl);
});


router.post("/createproperty", propertyController.createproperty )

router.get("/getpropertyData", propertyController.getpropertyData )

//router.get("/abc", propertyController.abc )


// router.get("/getpropertyWithAuthorDetails", propertyController.getpropertyWithAuthorDetails  )

module.exports = router;