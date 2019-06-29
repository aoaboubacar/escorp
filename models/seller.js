const mongoose = require('mongoose');
const SellerSchema = mongoose.Schema({
    name:{type: String,
        required: true
    },
    lastname:{type: String,
        required: true
    },
    earning:{type: Number,
        required: true
    },
    duree:{type: Number,
        required: true
    },
    adress:{type: String,
        required: true
    },
    wage:{type: Number,
        required: true
    }
});
const Seller = module.exports = mongoose.model('Seller', SellerSchema);