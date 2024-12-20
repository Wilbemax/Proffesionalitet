const { Schema, model } = require('mongoose');


const ContestSchema = new Schema({
    contestId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String }, // Ссылка на обложку конкурса
    eventDateTime: { type: Date, required: true },
    rating: { type: Number, min: 0, max: 5 },
    registeredCount: { type: Number, default: 0 },
    remainingSlots: { type: Number, required: true }
});


module.exports = model('Contest', ContestSchema);
