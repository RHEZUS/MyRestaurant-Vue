import axios from 'axios';
import { API_URL } from './config';

export default function authMiddleware(to, from, next) {
    const authToken = localStorage.getItem('authToken'); // Get authentication token from local storage

    // Check if the route requires authentication
    if (to.meta.requiresAuth) {
        // If authentication token is missing, redirect to login page
        if (!authToken) {
            next('/login');
            return;
        }
        
        // Make a request to the backend to validate the token and retrieve user role
        axios.get(`${ API_URL }/user`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(response => {
            // Retrieve user's role from the response
            const userRole = response.data.user.role;
            //console.log(userRole);
            // Check if the user has one of the required roles to access the route
            if (to.meta.requiresRole && !to.meta.requiresRole.includes(userRole)) {
                next('/unauthorized'); // Redirect to unauthorized page
                return;
            }
            next(); // Continue to the requested route
        })
        .catch(error => {
            console.error('Error verifying authentication token:', error);
            next('/login'); // Redirect to login page if there's an error
        });
    } else {
        next(); // Continue to the requested route for routes that do not require authentication
    }
}
