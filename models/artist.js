var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var artistSchema = new Schema({
  name: { type: String, minLength: 3, maxLength: 30, required: true },
  songs: { type: Schema.Types.ObjectId, ref: "Songs" },
  albums: { type: Schema.Types.ObjectId, ref: "Albums" },
});
artistSchema.virtual("url").get(function () {
  return "/catalog/artists/" + this._id;
});
module.exports = mongoose.model("Artist", artistSchema);
