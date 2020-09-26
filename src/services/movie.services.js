import axios from './axios';
import { apiKey } from '../utils/constant';

export const getMovies = async (page = 1) => {
    try {
        return axios.get('/movie/popular', {
            params: {
                api_key: apiKey,
                language: 'en',
                page
            }
        })
    } catch (err) {
        console.log("Error", err)
    }
}
