const donationModel = require("../../model/donation/donationModel");
const fetchDonationDataByPagination = async (req, res) => {
  const donorEmail = req.query.email;
  const currentPage = req.query.currentpage;
  const catagory = req.query.catagory;
  try {
    const result = await donationModel
      .find({ requesteremail: donorEmail ,status:catagory})
      .sort({ _id: -1 })
      .skip(currentPage * 3)
      .limit(3);
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
module.exports = fetchDonationDataByPagination;
