const express = require('express');
const tail = require('../tail/tail');
const union =require('../union/union')
const frompairs=require('../frompairs/frompairs')
const chunk=require('../chunk/chunk')

const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('my batch is',abc.batchname)
    //console.log('',abc.name)
   tail.findTAil()
   union.array2()
   frompairs.array3()
   chunk.array1()
   
    res.send('My  api!')
});

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })


//router.get('/movies ', function (req, res){
    // let movies   = ['koi mil gaya', 'bhahubali', 'don']
    // console.log(movies)
    //res.send(movies)
//})



// router.get('/ GET/movies/ ', function (req, res){
//    const a= [ {
//         'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': '2',
//         'name': 'Incendies'
//        }, {
//         'id': '3',
//         'name': 'Rang de Basanti'
//        }, {
//         'id': '4',
//         'name': 'Finding Nemo'
        
//        }]
//     //    const materials = [
//     //     'Hydrogen',
//     //     'Helium',
//     //     'Lithium',
//     //     'Beryllium'
//     //   ];
      
//       console.log(a.map(movie => movie));
//        //res.send(a)
 
// })



// router.get('/movies ', function (req, res){
//   const a = [ {
//         'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': '2',
//         'name': 'Incendies'
//        }, {
//         'id': '3',
//         'name': 'Rang de Basanti'
//        }, {
//         'id': '4',
//         'name': 'Finding Nemo'
//        }]
       

// let val=req.params
//     index=val.indexNum
//     console.log(index)

//     const inputId = index
//     const foundObj = movie.find(({ id }) => id == inputId);
//     if (foundObj) 
//     res.send( inputId +" => "+ foundObj.name)




// function abc(b){
// for(i=0;i<a.length;i++){
//     const c=movies[i]
//     if(c[id]===b){
//         console.log("movie[i]")
//     }

// res.send(a)
// else{
// res.send('invalid id')
// }}}
// abc("id","name")



// router.get(' /movies/:i', function (req, res){
//     let movies   = ['Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]
//     res.send(movies/:i)
// })





// router.get(' /movies/:i', function (req, res){
//     let movies   = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

//     for (i=0;i<movies.length;i++){
//         // console.log(movies[i])
//         res.send(movies[i])
//     }
//     else
//     {
//         res.send("enter valid input")

//     }

// })








// router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })




module.exports = router;
