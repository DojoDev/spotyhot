import axios from 'axios';
const api = {
    key: process.env.REACT_APP_WEATHER_CLIENT_ID,
    city: 'Campinas',
    country: 'BR'
  }
  axios.get(`http://api.weatherstack.com/current?access_key=${api.key}&query=${api.city},${api.country}`)
    .then(res => {
      this.setState({
        tempo: res.data.current.temperature,
        cidade: res.data.location.name,
        estado: res.data.location.region
      })

    });

 export default api;