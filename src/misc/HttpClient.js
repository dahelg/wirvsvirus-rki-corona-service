/* eslint-disable class-methods-use-this */
import fetch from 'node-fetch';
import querystring from 'querystring';

export default class HttpClient {
    async get(url, data, headers = {}) {
        const requestUrl = data ? `${url}?${querystring.encode(data)}` : url;
        const response = await fetch(requestUrl, { method: 'GET', headers });
        const json = await response.json();
        return {
            status: response.status,
            data: json,
        };
    }

    async post(url, data, headers = {}) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        });
        if (response.status < 300) {
            let parsedResponse;
            if (response.headers.get('content-type').includes('application/json')) {
                parsedResponse = await response.json();
            } else {
                parsedResponse = await response.text();
            }
            return {
                status: response.status,
                data: parsedResponse,
            };
        }
        const error = {
            status: response.status
        };
        throw error;
    }

    async delete(url, headers = {}) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers
        });

        return {
            status: response.status,
        };
    }
}
