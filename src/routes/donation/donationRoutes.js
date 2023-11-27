const confrimdonationController = require("../../api/donation/confrimdonationController");
const deleteDonationDataController = require("../../api/donation/deleteDonationDataController");
const donateBloodController = require("../../api/donation/donateBloodController");
const donationEntryController = require("../../api/donation/donationController");
const fetchDonationDataByPagination = require("../../api/donation/fetchDOnationDataByPagination");
const fetchDonorDonationController = require("../../api/donation/fetchDonorDonationController");
const getSingleDonationDataController = require("../../api/donation/getSingleDonationDataController");
const mydonationrequest = require("../../api/donation/mydonationrequest");
const updateDonationDataController = require("../../api/donation/updateDonationDataController");
const router = require("express").Router();
// donation entry
router.post("/createdonationrequests", donationEntryController);
// donation data fetch
router.get("/fetchdonordonation", fetchDonorDonationController);
// get single donation data
router.get("/getsingledonationdata", getSingleDonationDataController);
// update single donation data
router.patch("/updatedonationrequestsdata", updateDonationDataController);
// delete donation request data
router.delete("/deletedonationrequestsdata", deleteDonationDataController);
// donate blood
router.patch("/donateblood", donateBloodController);
// confirm donation
router.patch("/confrimdonation", confrimdonationController);

// user (donor) own request
router.get("/mydonationrequest",mydonationrequest);

// fetching data by pagination
router.get("/fetchdatabypagination",fetchDonationDataByPagination)

module.exports = router;
