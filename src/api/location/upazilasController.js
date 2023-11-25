const upazilasModel = require("../../model/location/upazilasModel");

const upazilasController = async (req, res) => {
  try {
    const userDistricts = req.query.userDistricts;
    const districtId = parseInt(userDistricts);
    const result = await upazilasModel.find();
    const upazilas = result.filter(i=>i.district_id === districtId);
    res.status(201).json({
      success: true,
      data: upazilas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error getting upazilas data on database!",
    });
  }
};

module.exports = upazilasController;
