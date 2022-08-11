//const { application } = require('express');
const express = require('express');
const tail = require('../tail/tail');
const union =require('../union/union')
const frompairs=require('../frompairs/frompairs')
const chunk=require('../chunk/chunk')

const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('my batch is',abc.batchname)
    //console.log('',abc.name)
   tail.findTail()
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

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


router.get('/movies', function (req, res){
    let movies   = ['koimilgaya', 'bhahubali', 'don']
    //console.log(movies)
    res.send(movies)
})





router.get('/movies11/:indexNumber', function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
   
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if(movieIndex<0 || movieIndex>=movies.length) {
        //if the index is invalid send an error message
     //   console.log("not valid")
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
   // console.log(movies[movieIndex])
    res.send(requiredMovie)
})




router.get('/movies12', function (req, res){
   const a= [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': '2',
        'name': 'Incendies'
       }, {
        'id': '3',
        'name': 'Rang de Basanti'
       }, {
        'id': '4',
        'name': 'Finding Nemo'
        
       }]
    
       res.send(a)
 
})




router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId

       //iterate all the films
       //search for a film whose id matches with the id recevied in request
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film["id"] == filmId) {
               //if there is a match return the response from here
               return res.send(film)
           }
       }

       //if there is no match give an error response
       res.send("The film id doesn't match any movie")
})





const persons=[
             {"name":"pk",
              "age":10,
              "voting status":false
             },
             {"name":"sk",
              "age":20,
              "voting status":false
             }, 
            {"name":"aa",
             "age":70,
             "voting status":false
            },
            {"name":"sc",
            "age":5,
            "voting status":false
            },
            { "name":"ho",
             "age":40,
             "voting status":false
            }
           ]


           router.get('/candidates1', function(req, res){
            console.log('Query paramters for this request are '+JSON.stringify(req.query))
          let votingage=req.query.voting
          let b=[]
          for (i=0;i<persons.length;i++){
            const a=persons[i] 
        if(a.age>votingage){
            a["voting status"]=true
           //return res.send(a) 
           b.push(a)
        }       
    }
    res.send (b) 
           })

          









            router.get('/candidates', function(req, res){
            console.log('Query paramters for this request are '+JSON.stringify(req.query))
            let gender = req.query.gender
            let state = req.query.state
            let district = req.query.district
            console.log('State is '+state)
            console.log('Gender is '+gender)
            console.log('District is '+district)
            let candidates = ['Akash','Suman','sumit']
            res.send(candidates)
        }) 
  
     

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



// router.get("/soil",function (req,res){
//     let arr=[1,2,3,5,6,7]
//     let total=0;
//     for(var i in arr){
//         total+=arr[i]
//     }
//     let lastDigit=arr.pop()
//     let consequetiveSum=lastDigit*(lastDigit+1)/2
//     let missingNumber=consequetiveSum-total
//     res.send({data:missingNumber})
// }) 



module.exports = router;
