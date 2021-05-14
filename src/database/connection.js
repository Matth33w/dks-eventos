const mongo = require("mongoose");
const config = require("../config.json");
var uri = "";

if(process.env.DEV == true) {
    uri = config.mongoURIDev;
} else {
    uri = config.mongoURIProduction;
}

module.exports = mongo.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});