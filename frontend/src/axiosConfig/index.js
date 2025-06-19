import axios from "axios";

const clientServer=axios.create({
    baseURL:"https://zerodha-learning.onrender.com",
    withCredentials: true, 
})
export {clientServer};