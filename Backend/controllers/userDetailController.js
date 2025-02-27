const UserModel = require("../models/user.model");

const UserDetailController = async (req, res) => {
  try {
    const userId = req.userId; // Ensure req.userId is properly set
    if (!userId) {
      return res.status(400).json({ errors: "User ID is required" });
    }
 
    console.log("UserId:", userId);
    
    // Assuming userId is stored as `_id` in the database
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ errors: "User not found" });
    }

    console.log("User:", user);

    return res.status(200).json({ message: "User Details", user });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    }); 
  }
};

module.exports = {
  UserDetailController,
};
