const userController = require("../../api/user/userController");
const userDashboardController = require("../../api/user/userDashboardController");
const userUpdateProfileController = require("../../api/user/userUpdateProfileController");
const router = require("express").Router();
// Setting user inside database
router.post("/users",userController);
// getting user inside database
router.get("/user/dashboard",userDashboardController);
// update profile
router.post("/user/updateProfile/:id",userUpdateProfileController)



module.exports = router;