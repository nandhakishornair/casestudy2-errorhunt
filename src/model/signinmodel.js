// // newly created...
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.URI,{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;


const signinSchema = new Schema({
    firstname:String,
    lastname:String,
     uid : String,    
    pwd: String
});

const signindata = mongoose.model('signindata',signinSchema);

module.exports = signindata;