const mongoose = require("mongoose");

const ConnectToDB = () => {
    mongoose.connect(`mongodb://127.0.0.1:27017/eCommers`).then(() => {
        console.log("Database Connected!");
    }).catch((err) => {
        console.log("error" , err);
    });
}

module.exports = ConnectToDB;