import axiosBase from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const axios = axiosBase.create({
  baseURL: "http://10.12.74.91:5000/api",
});

axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
