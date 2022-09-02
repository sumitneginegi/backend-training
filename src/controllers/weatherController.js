const axios =require("axios")
// [
//     { city: "London", temp: 280 },
//     { city: "Moscow", temp: 290 },
//     { city: "Bangalore", temp: 301.2 },
    
// ]


let getsortedcities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityobjarray = []
        for (i = 0; i  <cities.length; i++) {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1eda1b89bb2c098ec4c0a91ef7913f60`)

            console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp  
            cityobjarray.push(obj)


        }
        let sorted=cityobjarray.sort(function(a,b){ return a.temp-b.temp})
        console.log (sorted)
        res.status(200).send({status:true,data:sorted})
    }
    catch(error){
        console.log(error)
        res.status(500).send({status:false,msg:"server error"})
    }
    }


    module.exports.getsortedcities=getsortedcities