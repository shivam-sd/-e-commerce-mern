const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const UserRouter = require("./routes/user.router");
const ConnectToDB = require("./db/databaseConnect");


ConnectToDB();


app.get("/", (req,res) => {
    res.send("Hello");
});
 
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Allowed origin
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    credentials: true // If using cookies or authentication
}));


app.use("/users" , UserRouter);


app.listen(port , () => {
    console.log(`Server Started on Port no ${port}`);
});