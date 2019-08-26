const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const EmblemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gods: [{
    type: String,
    required: true,
    ref: "god"
  }]
  
});

module.exports = mongoose.model("emblem", EmblemSchema);
