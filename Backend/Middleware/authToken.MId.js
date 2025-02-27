const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  try {
    // Get token from cookies or Authorization header
    const token = req.cookies?.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    console.log("Extracted Token:", token);
    console.log("Cookies:", req.cookies);

    if (!token) {
      return res.status(401).json({ errors: "Unauthorized! No token provided." });
    }

    // Verify token
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    console.log("Decoded Token:", decode);

    req.userId = decode.id || decode.userId || decode.email; // Adjust based on your payload
    next();
  } catch (error) {
    console.error("Token Verification Error:", error);
    res.status(500).json({ message: "Invalid or Expired Token" });
  }
};

module.exports = { authToken };
