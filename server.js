const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const session = require('express-session');
const Url = require("./models/url");
const router = express.Router();

const authController = require("./controllers/authController");

//connect to mongoDB
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => console.log("Could not connect to the server"))

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to true if using HTTPS
}));

//middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//routes
app.get("/", authController.getHome);
app.post("/login", authController.login);
app.post("/otp", authController.otp);
app.post("/register", authController.register);
app.post("/signUp", authController.signUp);
app.post("/sendEmail", authController.sendEmail);
app.get("/passwordReset", authController.getResetPasswordLink);
app.post("/resetPasswordForm", authController.postResetPassword);
app.post("/shrinkUrl", authController.shrinkUrl);

app.get('/https', async (req, res) => {
    try {
        // Extract the short URL parameter from the request
        const shortUrl = req.query.shortUrl;
        console.log('shortUrl-------------- ', shortUrl)
        // Find the corresponding long URL in the database
        const urlEntry = await Url.findOne({ shortUrl });
        console.log('urlEntry-------------- ', urlEntry)
        // If the URL entry is found, increment the click count and redirect
        if (urlEntry) {
            urlEntry.clicks++;
            await urlEntry.save();
            console.log('originalUrl----------------------- : ', urlEntry.originalUrl)
            return res.redirect(urlEntry.originalUrl);
        } else {
            // If the URL entry is not found, return a 404 status
            return res.sendStatus(404);
        }
    } catch (error) {
        console.error('Error handling short URL redirection:', error);
        return res.sendStatus(500);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));