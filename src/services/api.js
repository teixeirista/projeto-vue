import axios from 'axios';
//import Vue from 'vue';
//import VueAxios from 'vue-axios';

const api = axios.create({
	baseURL:'http://127.0.0.1:8000/api/'
});
/*
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.access_token}`

const config = {
    headers: { Authorization: `Bearer ${localStorage.access_token}` }
};
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
Vue.axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.access_token}`}
export default axios;*/

export default api;