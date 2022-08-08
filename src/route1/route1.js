const express = require('express');
const tail = require('../tail/tail');
const union =require('../union/union')
const frompairs=require('../frompairs/frompairs')
const chunk=require('../chunk/chunk')

const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('my batch is',abc.batchname)
    //console.log('',abc.name)
   tail.tail()
   union.array()
   frompairs.pair()
   chunk.chunk()
   
    res.send('My  api!')
});





module.exports = router;
