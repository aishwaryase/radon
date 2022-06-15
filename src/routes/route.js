const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW= require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",commonMW.mid,commonMW.mid2, userController.getUserData)

router.put("/users/:userId",commonMW.mid,commonMW.mid2, userController.updateUser)

router.delete("/users/:userId",commonMW.mid,commonMW.mid2, userController.deleteUser)

module.exports = router;


// 
// commonMW.mid2,
// commonMW.mid2,