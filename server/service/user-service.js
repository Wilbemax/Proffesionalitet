const UserModule = require('../models/user-module');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailServise = require('../service/mail-service');
const tokenServise = require('../service/token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
	async registration(email, password) {
		const candidate = await UserModule.findOne({ email });
		if (candidate) {
			throw ApiError.BadRequest(`Пользователь с почтой ${email} существует `);
		}
		const hashPassword = await bcrypt.hash(password, 3);
		const activationLink = uuid.v4();
		const user = await UserModule.create({
			email,
			password: hashPassword,
			activationLink,
		});
		await mailServise.sendAcrivationMail(
			email,
			`${process.env.API_URL}/api/activate/${activationLink}`
		);

		const userDto = new UserDto(user);
		const tokens = tokenServise.generateToken({ ...userDto });
		await tokenServise.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: userDto,
		};
	}
	async activate(activationLink) {
		const user = await UserModule.findOne({ activationLink });
		if (!user) {
			throw ApiError.BadRequest('Некоретная ссылка активации');
		}

		user.isActivated = true;
		await user.save();
	}

	async login(email, password) {
		const user = await UserModule.findOne({ email });
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким email не найден');
		}
		const isPassEq = await bcrypt.compare(password, user.password);
		if (!isPassEq) {
			throw ApiError.BadRequest('Неверный пароль');
		}
		const userDto = new UserDto(user);
		const tokens = tokenServise.generateToken({ ...userDto });
		if (!tokens) {
			throw ApiError.BadRequest('Ошибка генерации');
		}
		await tokenServise.saveToken(userDto.id, tokens.refreshToken);
		return {
			...tokens,
			user: userDto,
		};
	}

	async logout(refreshToken) {
		const token = await tokenServise.removeToken(refreshToken);
		return token;
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError();
		}
		const userData = tokenServise.validateRefreshToken(refreshToken);
		const tokenFromDB = await tokenServise.findToken(refreshToken);
		if (!userData || !tokenFromDB) {
			throw ApiError.UnauthorizedError();
		}
		const user = await UserModule.findById(userData.id);
		const userDto = new UserDto(user);
		const tokens = tokenServise.generateToken({ ...userDto });
		await tokenServise.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: userDto,
		};
	}

	async getAllUsers() {
		const users = await UserModule.find();
		return users;
	}
}

module.exports = new UserService();
