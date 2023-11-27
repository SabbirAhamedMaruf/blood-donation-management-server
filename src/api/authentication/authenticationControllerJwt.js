const createTokenjwt = require("../../lib/authentication/createTokenjwt");

const authenticationControllerJwt =(req, res) => {
  try {
    const userEmail = req.body.email;
    console.log(userEmail)
    // creating token
    const token =createTokenjwt(userEmail);
    console.log(token)
    res.send({token});
  } catch {
    res.send({
        status:false,
        message:"error creating conection"
    })
  }
};

module.exports = authenticationControllerJwt;
