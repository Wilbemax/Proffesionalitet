const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    password: { type: String, required: true },
    familyPhoto: { type: String }, 
    contests: { type: Map, of: String }, 
    family: [
        {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            gender: { type: String, enum: ['male', 'female', 'other'], required: true },
            age: { type: Number, required: true }
        }
    ]
});
module.exports = model('User', UserSchema);
