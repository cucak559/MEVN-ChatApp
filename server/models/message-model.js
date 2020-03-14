const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: String,
  providerId: String,
  time: Date
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;
