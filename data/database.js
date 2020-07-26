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

    // const arr = await Movie.find({ year: { $gte: 1980, $lte: 1989 } });
};

module.exports = {
    initialize,
};
