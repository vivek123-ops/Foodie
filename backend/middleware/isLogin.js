const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  try {
    console.log("Cookie header:", req.headers.cookie);
    console.log("Parsed cookies:", req.cookies);

    const token = req.cookies?.token;

    if (!token) {
      console.log("TOKEN MISSING");

      return res.status(401).json({
        message: "Token not found",
      });
    }

    const decode = jwt.verify(token, "myscreate");

    console.log("JWT VERIFIED");
    console.log("User ID:", decode.userId);

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
