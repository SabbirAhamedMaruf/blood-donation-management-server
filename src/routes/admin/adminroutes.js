const router = require("express").Router();
const adminStatistics = require("../../api/admin/adminStatistics");
const verifyAdmin = require("../../middleware/verifyAdmin");
const verifyToken = require("../../middleware/verifytoken");

// Routes
// getting all statistics
router.get("/adminstatistics",verifyToken,verifyAdmin,adminStatistics);






module.exports = router;