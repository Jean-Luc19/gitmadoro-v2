const mongoose = require('mongoose');
const Schema = mongoose.schema;

const userSchema = new Schema {
  profileId: {type: Number, required: true}
  name: {type: String, required: true},
  accessToken: {type: String, required: true},
  avatar: {type: String, required: true}
}
