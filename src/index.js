const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const route1 = require('./routes/test.js');
// const { default: mongoose } = require('mongoose');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect("mongodb+srv://Aishwarya123:sg8eJZVpV9e3eEP3@cluster0.gf2pu4l.mongodb.net/aishu", {
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

// ========================= 01 ======================//

// Q1.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this

app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    
    let arr= [1,2,3,5,6,7]
    let item = arr[0];
    let n = [5];
    for(var i=0; i< arr.length+1 ; i++){
        if(arr[i] == item){
            item++
        }else{
             missingNumber = item
        }
    }
   const sumOfTheArray=(n*(n+1))/2 - missingNumber
  console.log(missingNumber)
    ///LOGIC WILL GO HERE 
    res.send(  { Data : missingNumber   }  );
});
// ========================= 02 ======================//

// Q2. 
 // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 // Your route code will look like this
 app.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let item = arr[0]

    for(let i=0; i<arr.length; i++){
        if(arr[i] == item){
            item++
        }else{
            missingNumber = item
            break;
        }
    }
    // const sumOfTheArray= n * (first + last) / 2 - missingNumber
    console.log(missingNumber)
    ///LOGIC WILL GO HERE 

    res.send(  { Data : missingNumber  }  );
});

