const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    clicks: { type: Number, required: true, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model("Url", urlSchema);