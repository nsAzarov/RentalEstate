const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    city: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    petsAllowed: {
        type: Boolean,
        required: true
    },
    smokingAllowed: {
        type: Boolean,
        required: true
    },
    kidFriendly: {
        type: Boolean,
        required: true
    }
}, {collection: 'Apartments'});

module.exports = Apartment = mongoose.model('Apartment', ApartmentSchema);