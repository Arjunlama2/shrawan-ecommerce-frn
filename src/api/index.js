


import axios from "axios";
import { BaseUrl } from "../hook/useFetch"; // you already have this

const axiosInstance = axios.create({
    baseURL: `${BaseUrl}/api/v1`,
    headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});









export const getAllProducts = async () => {
    const res = await axiosInstance.get(`/product`)
    return res.data
}

export const getMe = async () => {
    const res = await axiosInstance.get(`/user/me`)
    return res.data
}








export default axiosInstance;