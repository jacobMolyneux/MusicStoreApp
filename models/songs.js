var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var songSchema = new Schema({
  title: { type: String, maxLength: 64, required: true },
  album: { type: Schema.Types.ObjectId, ref: "Album" },
  lenght: { type: Number, required: true },
  artist: { type: Schema.Types.ObjectId, ref: "Artist" },
  date_published: { type: Date, default: Date.now },
});

songSchema.virtual("url").get(function () {
  return "/catalog/songs/" + this._id;
});

module.exports = mongoose.model("Song", songSchema);
