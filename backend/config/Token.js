const jwt = require("jsonwebtoken");

const generatetoken = async (userId) => {
  try {
    const token = await jwt.sign({ userId }, "myscreate", {
      expiresIn: "7d",
    });
    return token;
  } catch {
    res.status(401).json({
      message: "error found generate token",
    });
  }
};

module.exports = generatetoken;
