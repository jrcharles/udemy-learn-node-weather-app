const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('Las Vegas, NV', (err, res) => {
    console.log('Error', err)
    console.log('Data', res)
})

forecast(115.1492, 36.1663, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })