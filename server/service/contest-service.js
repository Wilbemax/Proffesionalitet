const Contest = require('../models/contest-module');
const ApiError = require('../exceptions/api-error');

class ContestService {
	async getContest() {
		const contests = await Contest.find();
		if (!contests) {
			throw new ApiError(404, 'Contest not found');
		}
		return contests;
	}
}

module.exports = new ContestService();
