const donationModel = require("../../model/donation/donationModel");
const mydonationrequest = async (req, res) => {
  const donorEmail = req.query.email;
  try {
    const result = await donationModel
      .find({ requesteremail: donorEmail })
      .sort({ _id: -1 });
    res.status(201).json({
      success: true,
      message: "donation data fetched successfully!",
      data: result,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Error fetching donation data from database!",
    });
  }
};
module.exports = mydonationrequest;
