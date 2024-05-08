
import axios from "axios";

const BASE_URL = 'https://www.dnd5eapi.co/api';

export default async function fetchMonsters() {
    try {
        const response = await axios.get(`${BASE_URL}/monsters`);
        return response.data.results;
    } catch (error) {
        console.error('Error to fetching monsters: ', error);
        throw error;
    }
}

