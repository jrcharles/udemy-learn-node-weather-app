const request = require('request')

request({
    url: 'http://api.weatherstack.com/current?access_key=805308cf562392412b4ed958fc5acd87&query=Knoxville,%20TN&units=f',
    json: true
}, (err, res) => {
    const data = res.body.current
    console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees.  It feels like ' + data.feelslike + ' out.')
})

request({
    url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianJjaGFybGVzIiwiYSI6ImNrY2I0MXcxcDFuOXYyd3FwOHM4OHdkdmQifQ.iFqLmXKZMeKfHh9VQK8t3g&limit=1',
    json: true
}, (err, res) => {
    const long = res.body.features[0].center[0]
    const lat = res.body.features[0].center[1]
})