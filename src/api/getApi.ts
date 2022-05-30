import axios from "axios";

const apiGet = axios.create({
        baseURL: `https://pokeapi.co/api/v2/`,
}) 

export default apiGet;
