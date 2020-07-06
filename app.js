const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=805308cf562392412b4ed958fc5acd87&query=Knoxville,%20TN&units=f'

request({
    url: url,
    json: true
}, (err, res) => {
    const data = res.body.current
    console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees.  It feels like ' + data.feelslike + ' out.')
})
