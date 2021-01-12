import axios from 'axios';
const config ={
    key: '66197a010227b561c6ed71ce47f8707e',
    city: 'Campinas',
    country: 'BR'
   
 }
const api =  
 axios.create({
     baseURL:`http://api.openweathermap.org/data/2.5/weather?q=${config.city},${config.country}&appid=${config.key}`
 });

 export default api;