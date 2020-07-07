const request = require('request')
const geocode = require('./utils/geocode.js')

// request({
//     url: 'http://api.weatherstack.com/current?access_key=805308cf562392412b4ed958fc5acd87&query=Knoxville,%20TN&units=f',
//     json: true
// }, (err, res) => {
//     if (err) {
//         console.log('Unable to connect to weather service')
//     } else if (res.body.error) {
//         console.log('Unable to find location')
//     } else {
//     const data = res.body.current
//     console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees.  It feels like ' + data.feelslike + ' out.')
//     }
// }}

geocode('Knoxville, TN', (err, res) => {
    console.log('Data', res)
})