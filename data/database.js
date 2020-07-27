const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const initialize = () => {
    mongoose.connect(process.env.mongodb_connection_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.once("open", function () {
        console.log("success!");
    });
};

module.exports = {
    initialize,
};
