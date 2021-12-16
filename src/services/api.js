import axios from 'axios';
//import Vue from 'vue';
//import VueAxios from 'vue-axios';

const api = axios.create({
	baseURL:'http://127.0.0.1:8000/api/' //Define a url base da aplicação
});

export default api; //Exporta a constante api, que pode ser usada por outros arquivos para acessar a api do projeto em laravel