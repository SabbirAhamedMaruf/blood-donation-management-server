const donationModel = require("../../model/donation/donationModel");
const getSingleDonationDataController = async (req, res) => {
    const currentDonationDataId = req.query.donationDataId;
  try {
    const result = await donationModel.findOne({ _id: currentDonationDataId});
    res.status(201).json({
      success: true,
      message: "donation data fetched successfully!",
      data: result,
    });
  } catch{
    res.status(500).json({
      success: false,
      message: "Error fetching donation data from database!",
    });
  }
};
module.exports = getSingleDonationDataController;