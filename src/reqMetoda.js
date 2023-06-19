import axios from "axios"

const url = 'http:/localhost:5000/api/';
const token = '';
export const publicReq = axios.create({
    URL: url,
});

export const korisnikReq = axios.create({
    URL: url,
    header:{token:`Bearer ${token}`}
});

