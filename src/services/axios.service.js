import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

const getMovies = () => axiosService.get(``)


export {
    getMovies
}