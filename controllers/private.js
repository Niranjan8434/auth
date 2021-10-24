const User = require("../models/User");

exports.getPrivateData = async (req, res, next) => {
  
  const user = await User.find({}).select("+password");
 console.log(user);
  
  res
    .status(200)
    .json({
      success: true,
      data: " "+user,
    })
    

};
