const { Schema, model, models } = require("mongoose");

const NotificationSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  msg: { type: String, required: true },
  sender_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Notification =
  models.Notification || model("Notification", NotificationSchema);

module.exports = Notification;
