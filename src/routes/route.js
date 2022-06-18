const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemesController= require("../controllers/memeController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//  vaccinations routers

router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getIdandDate", CowinController.getIdandDate)

//  Weather routers

router.get("/weather/getWeather", WeatherController.getWeather)

router.get("/weather/getTemp", WeatherController.getTemp)

router.get("/weather/sortByTemp", WeatherController.sortByTemp)

//  Memes routers

router.get("/memes/getMemes", MemesController.getMemes)

router.post("/memes/createMemes", MemesController.cerateMemes)

 

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;