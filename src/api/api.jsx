import axios from "axios";

const AXIOS_API = axios.create({
    // baseURL:"http://localhost:5000"
    baseURL:"https://tasteshare-server.onrender.com/"
})

export default AXIOS_API;