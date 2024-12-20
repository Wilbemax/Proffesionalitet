import { makeAutoObservable } from "mobx";
import { API_URL } from "../../shared/http";
import { AuthResponse, ContestI, UserI } from "../../shared/http/type";
import AuthService from "../auth/services/auth-service";
import axios from "axios";

export default class Store {
    user: UserI = {} as UserI;
    contests: ContestI[] = [];
    isAuth: boolean = false;
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setContests(contests: ContestI[]) {
        this.contests = contests
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: UserI) {
        this.user = user;
    }

    setIsLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);

            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response;
        } catch (e: unknown) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        age: number,
        gender: string,
        familyPhoto: string
    ) {
        try {
            const response = await AuthService.registration(
                email,
                password,
                firstName,
                lastName,
                age,
                gender,
                familyPhoto
            );

            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: unknown) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as UserI);
        } catch (e: unknown) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setIsLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });

            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: unknown) {
            console.log(e.response?.data?.message);
        } finally {
            this.setIsLoading(false);
        }
    }

    async getContests() {
        this.setIsLoading(true);
        try {
            const response = await axios.get<ContestI[]>(`${API_URL}/contests`, { withCredentials: true });

            this.setContests(response.data);  
            this.setContests(response.data);  
        } catch (e: unknown) {
            console.log(e.response?.data?.message);
        } finally {
            this.setIsLoading(false);
        }
    }
    
}
