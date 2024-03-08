const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    randomstring: { type: String },
    urls: [{ type: Schema.Types.ObjectId, ref: 'Url' }],
});

module.exports = mongoose.model("User", userSchema);