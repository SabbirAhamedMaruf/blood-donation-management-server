const donationModel = require("../../model/donation/donationModel");

const donationEntryController = async (req, res) => {
  const currentDonationEntryData = new donationModel(req.body);
  try {
    await currentDonationEntryData.save();
    res.status(201).json({
      success: true,
      message: "donation request added successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding donation request inside database!",
    });
  }
};

module.exports = donationEntryController;
