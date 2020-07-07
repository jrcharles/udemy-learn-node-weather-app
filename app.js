const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const city = process.argv[2]

geocode(city, (err, data) => {
    if (err || !city) {
        return console.log(err)
    }

    forecast(data.lat, data.long, (err, forecastData) => {
        if (err) {
            return console.log(err)
        }

        console.log(data.location)
        console.log(forecastData)
      })
})

