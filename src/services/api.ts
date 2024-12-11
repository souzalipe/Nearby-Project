import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.1.45:3333", //confirme se seu enderelo IP não mudou
    timeout: 700, 
}) 