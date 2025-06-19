import axios from "axios";

const clientServer=axios.create({
    baseURL:"https://zerodha-server-2453.onrender.com",
    withCredentials: true, 
})
export {clientServer};