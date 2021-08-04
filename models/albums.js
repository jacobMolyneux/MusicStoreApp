var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var albumSchema = new Schema({
  title: { type: String, required: true, maxLenght: 100, minLength: 3 },
  artist: { type: Schema.Types.ObjectId, ref: "Artist" },
  songs: [{ type: Schema.Types.ObjectId, ref: "Songs" }],
  publishedDate: { type: Date, default: Date.now },
});

albumSchema.virtual("url").get(function () {
  return "/catalog/albums/" + this._id;
});
module.exports = mongoose.model("Album", albumSchema);
