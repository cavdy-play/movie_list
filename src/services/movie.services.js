import axios from './axios';
import { apiKey } from '../utils/constant';

export const getMovies = async () => {
    try {
        return axios.get('/movie/popular', {
            params: {
                api_key: apiKey,
                language: 'en',
                page: 1
            }
        })
    } catch (err) {
        console.log("Error", err)
    }
}
