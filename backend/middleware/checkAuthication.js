const User = require("../module/UserModule");

const checkAuthication = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.userType !== "shop") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized",
      });
    }

    next();
  } catch (error) {
    console.error("Check authentication error:", error);

    return res.status(500).json({
      success: false,
      message: "Error in checkAuthication middleware",
    });
  }
};

module.exports = checkAuthication;
