const express = require('express');
const { route } = require('express/lib/application');

// const myHelper = require('../util/helper')
// const underscore = require('underscore')
const lodash = require('lodash')


const router = express.Router();

router.get('/test-me', function (req, res) {
    

    // myHelper.printDate()
    // myHelper.getCurrentMonth()
    // myHelper.getCohortData()
    // let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    // console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })



module.exports = router;
// adding this comment for no reason


// ============ Problem-4 =========
// <---------- (a) ----------->
router.get('/hello', function (req, res) {
 const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  console.log(lodash.chunk(months,3))
  
// <---------- (b) ----------->

const number = [1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(number))

// <---------- (c) ----------->
let arr1 = [1,2,1,3,4,5];
let arr2 = [3,9,5,2,3,2];
let arr3 = [1,5,6,4,1,4];
let arr4 = [9,8,9,7,6,5];
let arr5 = [3,4,1,3,1,9];
console.log(lodash.union([...arr1,...arr2,...arr3,...arr4,...arr5]))

// <---------- (d) ----------->
const arr = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log(lodash.fromPairs(arr))


res.send('Hello there!')
});

// router.get('/movies', function (req, res) {
//    movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     res.send(movies)
// });
// router.get('/movies/:indexNumber', function(req, res){
//     const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     JSON.stringify(req.params)
//     let len = movies.length
//     let item = movies[req.params.indexNumber]
//     if(req.params.indexNumber < len){
//         res.send(item)
//     }else{
//         res.send('Error: There is no movie')
//     }
    
//     res.send('Hello!!!')
// })

