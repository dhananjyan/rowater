import axios from 'axios';
import { apiBaseUrl } from '../config';

export async function client(
    url,
    { body, method, ...customConfig } = {}
) {
    // const accessToken = localStorageHelper("accessToken");
    // const userToken = localStorageHelper("userToken");

    // let headers = { Accept: "*/*" };

    // if (token == "admin") headers.Authorization = `Bearer ${accessToken}`;
    // if (token == "user") headers.Authorization = `Bearer ${userToken}`;

    const config = {
        url,
        method,
        // baseURL: "http://4.224.32.104:8002",
        headers: {
            'Content-Type': 'application/json',
        },
        data: method === 'GET' ? null : body,
    };
    let data;

    try {
        const response = await axios(config);
        data = await response.data;
        if ([200, 201].includes(response.status)) {
            if (data?.status)
                return {
                    status: true,
                    data: data?.results,
                    message: data?.message,
                };
        }
        return {
            status: false,
            message: data?.message,
        };
    } catch (err) {
        console.log('ddd', err)
        return {
            status: false,
            data: err.data || null,
            message: err?.message,
            error: err
        };
    }
}

client.get = function (url, customConfig = {}) {
    return client(url, { ...customConfig, method: "GET" });
};

client.post = function (url, body, customConfig = {}) {
    return client(url, { ...customConfig, method: "POST", body });
};

client.put = function (url, body, customConfig = {}) {
    return client(url, { ...customConfig, method: "PUT", body });
};

client.patch = function (url, body, customConfig = {}) {
    return client(url, { ...customConfig, method: "PATCH", body });
};

client.delete = function (url, customConfig = {}) {
    return client(url, { ...customConfig, method: "DELETE" });
};
