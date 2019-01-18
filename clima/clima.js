const axios = require('axios');

const getClima = async(lat, lng) => {

    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=62c0e67cb5792dab48cc02693750653a`)
    if (result.data.cod !== 200) {
        throw new Error(`Coordenadas incorrectas ${lat},${lng}`)
    }

    return (result.data.main.temp);
}

module.exports = {
    getClima
}