const axios = require('axios');

const instance = axios.create({
    baseURL: "https://tiktok--mern-clone.herokuapp.com/",
});

module.exports = instance;