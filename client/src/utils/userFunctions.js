import axios from 'axios';

export const registerUser = (userData) => {
    // console.log(userData);
    return axios.post('http://localhost:3001/api/register', {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password,
    });
};

export const loginUser = (userData) => {
    // console.log(userData);
    return axios.post('http://localhost:3001/api/login', {
        email: userData.email,
        password: userData.password,
    });
};

export const getUsers = () => {
    return axios.get('http://localhost:3001/api/displayusers').then((res) => res.data);
};
