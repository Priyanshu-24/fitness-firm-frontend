import axios from 'axios';

const api = axios.create({

    baseURL : 'https://fitness-firm-backend.herokuapp.com'

})

export default api;