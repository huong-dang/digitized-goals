const dotenv = require("dotenv").config();
var Logsene = require("logsene-js");
var logger = new Logsene(process.env.LOGS_TOKEN);

const mongoose = require("mongoose");

const initialize = () => {
    mongoose.connect(process.env.mongodb_connection_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.once("open", function () {
        logger.log("info", "Hello, Logsene!", {
            tags: ["a", "b"],
            customField: "value here",
        });
    });
};

module.exports = {
    initialize,
};
