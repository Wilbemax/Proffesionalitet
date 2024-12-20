import { AxiosResponse } from 'axios';
import $api from '../../../shared/http';
import { AuthResponse } from '../../../shared/http/type';

export default class AuthService {
	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post(`/login`, { email, password });
	}
	static async registration(
		email: string,
		password: string,
		firstName: string,
		lastName: string,
		age: number,
		gender: string,
		familyPhoto: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post(`/registration`, {
			email,
			password,
			firstName,
			lastName,
			age,
			gender,
			familyPhoto,
		});
	}
	static async logout(): Promise<AxiosResponse<void>> {
		return $api.post(`/logout`);
	}
}
