const db = require("../../data/database");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    db.initialize();
    res.statusCode = 200;
    res.json({ name: "Yay! Successfully connected to databse" });
};
