const express = require('express');
const logger  = require('../logger/logger');
const helper =require('../util/helper')
const formattor=require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('my batch is',abc.batchname)
    //console.log('',abc.name)
   logger.name0()
   helper.name1()
   helper.name2()
   helper.name3()
   formattor.name4()
   formattor.name5()
   formattor.name6()
    res.send('My  api!')
});

// router.get('/test-you',function (req,res){
//     res.send('this is the second route implementation')
// })


// router.get('/give-me-students-data',function(req,res){


// })


module.exports = router;
// adding this comment for no reason