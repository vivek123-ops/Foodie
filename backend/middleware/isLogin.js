const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      console.log("TOKEN MISSING");

      return res.status(401).json({
        message: "Token not found",
      });
    }

    const decode = jwt.verify(token, "myscreate");

    req.userId = decode.userId;
    next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);

    return res.status(401).json({
      message: "Verification failed",
      error: error.message,
    });
  }
};

module.exports = verify;
