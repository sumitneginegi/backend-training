const express = require('express');
const router = express.Router();

const newauthorController= require("../controllers/newauthorController")
const newbookController= require("../controllers/newbookController")
const newpublisherController= require("../controllers/newpublisherController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createnewauthor", newauthorController.createnewauthor  )

router.get("/getnewauthorsData", newauthorController.getnewauthorsData)

router.post("/createnewBook", newbookController.createnewBook  )

router.get("/getnewBooksData", newbookController.getnewBooksData)

router.get("/getnewBooksWithAuthorDetails", newbookController.getnewBooksWithAuthorDetails)

router.post("/createnewpublisher", newpublisherController.createnewpublisher)


router.get("/getnewpublisherData", newpublisherController.getnewpublisherData)

module.exports = router;