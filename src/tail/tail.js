const _ =require('lodash')
const  oddarray1=[1,3,5,7,9,11,13,17,19,23]
const tail=()=>{
console.log(_.tail(oddarray1))
}
module.exports.findTail=tail