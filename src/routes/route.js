const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    let id = req.body.user
    let pwd= req.body.password

     console.log( id , pwd)


   console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


let players11 =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players0', function (req, res) {

       //LOGIC WILL COME HERE
      
       let ele= req.body
       let pla=ele.name
       for (i=0;i<players11.length;i++){
        const a=players11[i]
        if(a.name==pla){
            res.send("data already exist")
          break
        }
              
       }
       players11.push(ele)
      res.send(  { data: players11 , status: true }  )
   })




//==================================================

let player2 =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   

//    let players = []

router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < player2.length; i++) {
        if(player2[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        player2.push(newPlayer)
        res.send(player2)
    }
});

 
//=====================================================================

let player213 =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]


router.post('/players123',function(req,res){
    let newPlayer=req.body
    let newPlayersname=newPlayer.name
    let isnameRepeated=false
    //let player=players.find(p=>p.name==newplayersname)


    for(i=0;i<player213.length;i++){
        if(player213[i].name==newPlayersname){
            isnameRepeated=true
        break;
    }
   }
   //undefined is same as false/ a falsy value
   if (isnameRepeated){
    //player exists
    res.send ("this player  was already added")
   }
   else{
    //new  entry
    player213.push(newPlayer)
    res.send(player213)
   }
})


//============================================================



let players13 =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "bookingNumber": 1,
           "sportId" :"abc" ,
           "centerId": "123",
          "type": "private",
          "slot": "16286598000000",
          "bookedOn": "31/08/2021",
          "bookedFor": "01/09/2021"
         },        
       
        {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ], 
           "bookingNumber": 2,
           "sportId": "def",
           "centerId": "456",
          "type": "private",
          "slot": "16286598000000",
          "bookedOn": "31/08/2021",
          "bookedFor": "01/09/2021"
         },        
       
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "bookingNumber": 3,
           "sportId": "ghi",
           "centerId": "789",
          "type": "private",
          "slot": "16286598000000",
          "bookedOn": "31/08/2021",
          "bookedFor": "01/09/2021"
         }
         
        ]

   router.post('/PlayerName/:bookingId', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.PlayerName)
    let PN=req.params.PlayerName
    for(i=0;i<players13.length;i++){
        const a=players13[i]
        if(a["name"]==PlayerName){

        }
    }

    res.send('Done')
})

//==================================================
module.exports = router;