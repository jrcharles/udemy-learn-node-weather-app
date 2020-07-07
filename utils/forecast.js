const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const api = '805308cf562392412b4ed958fc5acd87'
    const url = 'http://api.weatherstack.com/current?access_key=' + api + '&query=' + latitude + ',' + longitude + '&units=f'
    
    request({
        url: url,
        json: true
    }, (err, res) => {
        if (err) {
            callback('Unable to connect to forecast service', undefined)
        } else if (res.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                data: res.body.current.weather_descriptions[0] + '. It is currently ' + res.body.current.temperature + ' degrees.  It feels like ' + res.body.current.feelslike + ' out.'
            })
        }
    })
}

module.exports = forecast