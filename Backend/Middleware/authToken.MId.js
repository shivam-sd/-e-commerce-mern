const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  try {
    const token = req.cookies;
    console.log("token", token);

    if (!token) {
      return res
        .status(401)
        .json({ errors: "Unauthorized! No token provided." });
    }

    // Verify token
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    console.log("Decoded Token:", decode);

    req.userId = decode.id;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = {
  authToken,
};
