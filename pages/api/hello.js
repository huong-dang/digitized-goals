const dotenv = require("dotenv").config();
var Logsene = require("logsene-js");
var logger = new Logsene(process.env.LOGS_TOKEN);
const db = require("../../data/database");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    db.initialize();
    logger.log("info", "Hello world!", {
        tags: ["a", "b"],
        customField: "value here",
    });

    res.statusCode = 200;
    res.json({ name: "Yay! Successfully connected to databse" });
};
