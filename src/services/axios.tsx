import axios from "axios";

const api = axios.create({
    baseURL: "https://be-geospasial.vercel.app/v2",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    async function (config: any) {

        if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
        }

        return config;
    },
    function (error: any) {
        return Promise.reject(error);
    }
);

// Tambahkan interceptor respons
api.interceptors.response.use(
    function (response: any) {
        return response;
    },
    function (error: any) {
        if (error.response.message === 'Unauthenticated.') {
            window.location.pathname = '/'
        }
        console.log("error interceptor:", error);

        return Promise.reject(error);
    }
);

export default api;
