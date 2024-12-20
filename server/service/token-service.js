const jwt = require('jsonwebtoken');
const tokenModule = require('../models/token-module');

class tokenService {
	generateToken(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
			expiresIn: '15m',
		});
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
			expiresIn: '30d',
		});
		return {
			accessToken,
			refreshToken,
		};
	}

	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
			return userData;
		} catch (e) {
			return null;
		}
	}

	validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

			return userData;
		} catch (e) {
			return null;
		}
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await tokenModule.findOne({ user: userId });
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return await tokenData.save();
		}
		const token = await tokenModule.create({ user: userId, refreshToken });
		return token;
	}

	async removeToken(refreshToken) {
		const tokenData = await tokenModule.deleteOne({ refreshToken });
		return tokenData;
	}

	async findToken(refreshToken) {
		const tokenData = await tokenModule.findOne({ refreshToken });
		return tokenData;
	}
}

module.exports = new tokenService();
