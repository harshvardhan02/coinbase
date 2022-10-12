const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  firstname: { type: String, default: null },
  lastname: { type: String, default: null },
  contact: { type: String, default: null, trim: true },
  username: { type: String, required: true, trim: true },
  profile_image: { type: String, trim: true, default: null },
  email: { type: String, required: true, trim: true },
  address: { type: String, default: null },
  country: { type: String, default: null },
  password: { type: String, required: true, trim: true },
  email_activate: { type: Boolean, required: true, trim: true },
  account_activate: { type: Boolean, required: true, trim: true },
  referal_link: { type: String, default: null, trim: true },
  referal_active: { type: Boolean, default: false, trim: true },
  timer: { type: Date, default: null },
  login_attempt: { type: String, default: 0 },
  login_time: { type: Date, default: new Date }
}, { timestamps: true, versionKey: false });

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', schema);

// make this available to our users in our Node applications
module.exports = User;