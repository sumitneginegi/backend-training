const _ =require('lodash')
const arr1=[1,2,3,4,5,6,7]
const arr2=[34,2,3,4,57,7]
const arr3=[1,21,33,4,57,6,7]
const arr4=[11,2,3,4,5,67,47]
const arr5=[1,23,23,44,5,62,7]



const array=()=>{
    console.log(_.union(arr1,arr2,arr3,arr4,arr5))
}
module.exports.array2=array