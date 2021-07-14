require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const crypto = require("crypto");
const uuid = require("uuid");

exports.login = (req, res) => {
	try {
		let refreshId = req.body.userId + JWT_SECRET;
		let salt = crypto.randomBytes(16).toString("base64");

		let hash = crypto
			.createHmac("sha512", salt)
			.update(refreshId)
			.digest("base64");

		req.body.refreshKey = salt;

		let token = jwt.sign(req.body, JWT_SECRET);

		let b = Buffer.from(hash);

		let refresh_token = b.toString("base64");

		return res
			.status(201)
			.send({ accessToken: token, refreshToken: refresh_token });

	} catch (err) {
		return res.status(500).send({ error: err });
	}
};
