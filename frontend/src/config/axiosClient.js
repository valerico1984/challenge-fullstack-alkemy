const axios= require('axios')

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

module.exports= axiosClient