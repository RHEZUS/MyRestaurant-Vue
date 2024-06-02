import { reactive } from 'vue';
const local_api_url = 'http://127.0.0.1:8000/api';
export const mediaUrl = 'http://127.0.0.1:8000'
const remote_api_url = 'https://api.ludivsolutions.tech/api';
export const API_URL = local_api_url;
//export let showCartModal = false;
//https://api.julie-u.shop/
//http://127.0.0.1:8000/api

import axios from 'axios';

export async function checkAuthAndRole(...roles) {
    const authToken = localStorage.getItem('authToken'); // Get authentication token from local storage

    // If authentication token is missing, reject the promise
    if (!authToken) {
        return false;
        //return Promise.reject(new Error('Authentication token is missing.'));
    }

    try {
        // Make a request to the backend to validate the token and retrieve user role
        const response = await axios.get(`${ API_URL }/test-token/`, {
            headers: {
                Authorization: `Token ${authToken}`
            }
        });
        //console.log(response);

        // Retrieve user's role from the response
        const userRole = response.data.user.role;

        // Check if the user has one of the required roles to access the route
        if (!roles.includes(userRole)) {
            return false;
            //return Promise.reject(new Error('User does not have required roles.'));
        }
        // If everything is fine, resolve the promise
        return true;
    } catch (error) {
        return false;
        //console.error('Error verifying authentication token:', error);
        // If there's an error, reject the promise
        //return Promise.reject(error);
    }
}
