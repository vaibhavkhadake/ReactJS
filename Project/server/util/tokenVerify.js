const { sKey } = require("../config/token.config");
const jwt = require("jsonwebtoken");
module.exports = {
	tokenVerifyer(req, res, next) {
		var token = req.headers["token"] || req.params.token;
		console.log("\nvalue of token in token verifyer ", token);
		jwt.verify(token, sKey, function(err, decoded) {
			if (err) {
				console.log(err);
			} else {
				console.log("value of request",req.body);			
				req.decoded = decoded;
				next();
			}
		});
	}
};
