const usermodel = require("../../model/user/userModel");
const donationModel = require("../../model/donation/donationModel");

const adminStatistics = async (req, res) => {
  const adminEmail = req.query.email;
  console.log(adminEmail);

   if(req.decoded.email===adminEmail){
    const totalUser = await usermodel.countDocuments();
    const totalDonation = await donationModel.countDocuments();
      console.log(totalUser)
      console.log(totalDonation)
    }else{
      console.log(false)
    }


//   try {
//     await newUserData.save();
//     res.status(201).json({
//       success: true,
//       message: "User added successfully!",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error adding user inside database!",
//     });
//   }
};

module.exports = adminStatistics;
