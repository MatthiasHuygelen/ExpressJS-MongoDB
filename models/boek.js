const mongoose = require("mongoose");

const boekenSchema = mongoose.Schema(
    {
        titel : {
            type: String,
            required: true
        },
        descriptie : String,
        auteur : String
    }
);

module.exports = mongoose.model("Boek", boekenSchema);