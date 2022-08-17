import axios from 'axios';

/* Creating a new instance of axios with a baseURL of "https://api.themoviedb.org/3" */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;