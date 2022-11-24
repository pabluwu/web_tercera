import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.js';
import axios from 'axios'
import storage from './storage'



axios.defaults.baseURL = 'http://localhost:3000/';

var token = localStorage.getItem('token');
if(token){
    axios.defaults.headers.common['Authorization'] =  token;
}

createApp(App).use(router, axios, storage).mount('#app');







