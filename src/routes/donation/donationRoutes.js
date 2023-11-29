const confrimdonationController = require("../../api/donation/confrimdonationController");
const deleteDonationDataController = require("../../api/donation/deleteDonationDataController");
const donateBloodController = require("../../api/donation/donateBloodController");
const donationEntryController = require("../../api/donation/donationController");
const donationRequestPageController = require("../../api/donation/donationRequestPageController");
const fetchDonationDataByPagination = require("../../api/donation/fetchDOnationDataByPagination");
const fetchDonorDonationController = require("../../api/donation/fetchDonorDonationController");
const getSingleDonationDataController = require("../../api/donation/getSingleDonationDataController");
const mydonationrequest = require("../../api/donation/mydonationrequest");
const updateDonationDataController = require("../../api/donation/updateDonationDataController");
const verifyToken = require("../../middleware/verifytoken");
const router = require("express").Router();

// > create donation page dashboard (ok)
router.post("/createdonationrequests", verifyToken, donationEntryController);

// > custom api useDonorDonationdata for Home page(dashboard) (ok)
router.get("/fetchdonordonation", verifyToken, fetchDonorDonationController);

//> get single donation data (during view details from) dashboard home (ok)
router.get(
  "/getsingledonationdata",
  verifyToken,
  getSingleDonationDataController
);

//> update single donation data during update a donation data after clicking view edit button
router.patch(
  "/updatedonationrequestsdata",
  verifyToken,
  updateDonationDataController
);

//> Delete own donation entry my donation request (dashboard) (ok)
router.delete(
  "/deletedonationrequestsdata",
  verifyToken,
  deleteDonationDataController
);

//> donate blood on user homepage under details button. (ok)
router.patch("/donateblood", verifyToken, donateBloodController);

//> confirm donation on donor home and donor donation (dashboard ) (ok)
router.patch("/confrimdonation", verifyToken, confrimdonationController);

// > custom api usemydonationdata (ok)
router.get("/mydonationrequest", verifyToken, mydonationrequest);

//> fetching data by pagination of my donation request page (dashboard) ok
router.get(
  "/fetchdatabypagination",
  verifyToken,
  fetchDonationDataByPagination
);


// DonationRequest Page
router.get("/donationRequest",donationRequestPageController)
module.exports = router;
