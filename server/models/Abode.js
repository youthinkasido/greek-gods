const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const AbodeSchema = new Schema({
   name: {
      type: String,
      required: true,
      unique: true,
      ref: "abode"
   },
   coordinate: {
      type: String,
      required: true
   },
   gods: [{
      type: String,
      required: true,
      ref: 'god'
   }]
})


module.exports = mongoose.model("abode", AbodeSchema);