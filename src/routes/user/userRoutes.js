const userController = require("../../api/user/userController");
const router = require("express").Router();
router.post("/users",userController);

module.exports = router;