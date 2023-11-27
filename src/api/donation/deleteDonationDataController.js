const donationModel = require("../../model/donation/donationModel");

const deleteDonationDataController = async (req, res) => {
  try {
    const donationDataId = req.query.donationId;
    console.log(donationDataId);
    const result = await donationModel.deleteOne({_id:donationDataId});
    res.status(201).json({
      success: true,
      message: "Donation request information deleted from database!",
      data: result,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Error deleting donation information from database!",
    });
  }
};

module.exports = deleteDonationDataController;
