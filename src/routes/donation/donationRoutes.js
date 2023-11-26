const donationEntryController = require("../../api/donation/donationController");
const router = require("express").Router();
router.post("/createdonationrequests", donationEntryController);
module.exports = router;
