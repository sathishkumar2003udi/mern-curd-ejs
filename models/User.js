const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema);
