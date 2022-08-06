 const date=new Date()
 
 
 let printDate =function (){
    console.log("current date",date.getDate())
} 
let printMonth =function(){
    console.log("current month ",date.getMonth()+1)
}
let getBatchInfo =function(){
    console.log("Plutonium, W3D3, the topic for today is Nodejs module system")
}
module.exports.name1=printDate
module.exports.name2=printMonth
module.exports.name3=getBatchInfo
