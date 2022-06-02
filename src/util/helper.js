const printDate = function(){
    let currentDate = new Date()
    console.log("Today's Date is: "+currentDate)
}

const printMonth = function(){
    const currentMonth = new Date().getMonth()+1;
    console.log("This month is:"+ currentMonth)
}

const getBatchInfo = function(){
    console.log("Radon, W3D3, the topic for today is Nodejs modules system")
}
 

module.exports.date = printDate
module.exports.month = printMonth
module.exports.batchInfo = getBatchInfo