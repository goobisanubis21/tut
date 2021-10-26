const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorUserSchema = new Schema({
    first_name: { type: String },
    // last_name: { type: String },
    // birth_date: {type: Date},
    // email: { type: String },
    // date: { type: Date, default: Date.now }
});

const TutorUser = mongoose.model("tutoruser", tutorUserSchema);

module.exports = TutorUser;