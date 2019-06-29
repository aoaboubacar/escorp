const mongoose = require('mongoose');
const AgentSchema = mongoose.Schema({
    name:{type: String,
        required: true
    },
    lastname:{type: String,
        required: true
    },
    birthdate:{type: Date,
        required: true
    },
    birthcountry:{type: Number,
        required: true
    },
    adress:{type: String,
        required: true
    },
    phone:{type: Number , min : 10, max : 10,
        required: true
    },
    picture: {
        type: Boolean,
        default: false
    }
});
const Agent = module.exports = mongoose.model('Agent', AgentSchema);