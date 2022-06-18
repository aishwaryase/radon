let axios = require("axios")

// ==========================[2 (a)]=================================//

let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid

        console.log(`query params are:  ${city} ${appid}`)

        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`

        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather

// ==========================[2 (b)]=================================//

let getTemp = async function (req, res) {
    try{
        let city = req.query.q
        let appid = req.query.appid
        
        console.log(`query params are:  ${city} ${appid}`)
        
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        
        }

let result = await axios(options);
// console.log(result)
let data = result.data
res.status(200).send({ msg: `temp: ${data.main.temp} K` })
}
catch (err) {
// console.log(err)
res.status(500).send({ msg: err.message })
}
}

module.exports.getTemp = getTemp

// ==========================[2 (c)]=================================//


let sortByTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appid = `04c971b6c1695ef3aabb44374abea06d`
        let store = []
        for (let i = 0; i < cities.length; i++) {
            var options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`
            }
            let result = await axios(options)
            let data = { "city": `${result.data.name}`, "temp": `${result.data.main.temp}` }
            store.push(data)
        }

        store.sort(function(a, b){
            return a.temp - b.temp
        })  
        res.status(200).send({ msg: store })
    }

    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.sortByTemp = sortByTemp

// ======================[]=======================//

