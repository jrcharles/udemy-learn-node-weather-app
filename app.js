const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast.js")

const city = process.argv[2]

geocode(city, (err, { lat, long, location } = {}) => {
  if (err || !city) {
    return console.log(err)
  }

  forecast(lat, long, (err, forecastData) => {
    if (err) {
      return console.log(err)
    }

    console.log(location)
    console.log(forecastData)
  })
})
