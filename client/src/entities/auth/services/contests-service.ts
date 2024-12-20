import { AxiosResponse } from 'axios';
import { ContestI } from '../../../shared/http/type';
import $api, { API_URL } from '../../../shared/http';

export default class ContestsService {
    static async getContests(): Promise<AxiosResponse<ContestI[]>> { 
        return $api.get(`${API_URL}/contests`);
    }
}
