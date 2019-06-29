const mongoose = require('mongoose');
const MarketSchema = mongoose.Schema({
    name:{type: String,
        required: true
    }
});
const Market = module.exports = mongoose.model('Market', MarketSchema);