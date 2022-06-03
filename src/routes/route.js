const express = require('express');
const { route } = require('express/lib/application');

// const myHelper = require('../util/helper')
// const underscore = require('underscore')
const lodash = require('lodash')


// ============ Problem-4 =========
// <---------- (a) ----------->
// - Create an array of strings containing the names all the months of a year and
//  split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays

router.get('/hello', function (req, res) {
 const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  console.log(lodash.chunk(months,3))
  
// <---------- (b) ----------->
// - Create an array containing the first 10 odd numbers. Using the tail function, 
// return the last 9 elements of it and print them on console.

const number = [1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(number))

// <---------- (c) ----------->
// - Create 5 arrays of numbers containing a few duplicate values.
//  Using the function union create a merged array with only unique values and print them

let arr1 = [1,2,1,3,4,5];
let arr2 = [3,9,5,2,3,2];
let arr3 = [1,5,6,4,1,4];
let arr4 = [9,8,9,7,6,5];
let arr5 = [3,4,1,3,1,9];
console.log(lodash.union([...arr1,...arr2,...arr3,...arr4,...arr5]))

// <---------- (d) ----------->
// - Use the function fromPairs to create an object containing key value pairs.

const arr = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log(lodash.fromPairs(arr))


res.send('Hello there!')
});

module.exports = router;
// adding this comment for no reason


// const router = express.Router();

// router.get('/test-me', function (req, res) {
    

//     // myHelper.printDate()
//     // myHelper.getCurrentMonth()
//     // myHelper.getCohortData()
//     // let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     // console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// // router.get('/hello', function (req, res) {
   
// //     res.send('Hello there!')
// // });

// // router.get('/candidates', function(req, res){
// //     console.log('Query paramters for this request are '+JSON.stringify(req.query))
// //     let gender = req.query.gender
// //     let state = req.query.state
// //     let district = req.query.district
// //     console.log('State is '+state)
// //     console.log('Gender is '+gender)
// //     console.log('District is '+district)
// //     let candidates = ['Akash','Suman']
// //     res.send(candidates)
// // })

// // router.get('/candidates/:canidatesName', function(req, res){
// //     console.log('The request objects is '+ JSON.stringify(req.params))
// //     console.log('Candidates name is '+req.params.canidatesName)
// //     res.send('Done')
// // })





