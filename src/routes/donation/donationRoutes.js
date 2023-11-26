const donationEntryController = require("../../api/donation/donationController");
const fetchDonorDonationController = require("../../api/donation/fetchDonorDonationController");
const getSingleDonationDataController = require("../../api/donation/getSingleDonationDataController");
const updateDonationDataController = require("../../api/donation/updateDonationDataController");
const router = require("express").Router();
// donation entry
router.post("/createdonationrequests", donationEntryController);
// donation data fetch
router.get("/fetchdonordonation",fetchDonorDonationController);
// get single donation data
router.get("/getsingledonationdata",getSingleDonationDataController);
// update single donation data
router.patch("/updatedonationrequestsdata",updateDonationDataController)

module.exports = router;
