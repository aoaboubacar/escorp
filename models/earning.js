const mongoose = require('mongoose');
const EarningSchema = mongoose.Schema({
    amount:{type: String,
        required: true
    },
    market:{

    },
    seller:{
        
    }

});
const Earning = module.exports = mongoose.model('Earning', EarningSchema);