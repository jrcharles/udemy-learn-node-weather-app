const request = require('request')

const geocode = (address, callback) => {
    const api = 'pk.eyJ1IjoianJjaGFybGVzIiwiYSI6ImNrY2I0MXcxcDFuOXYyd3FwOHM4OHdkdmQifQ.iFqLmXKZMeKfHh9VQK8t3g'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + api + '&limit=1'

    request({
        url: url,
        json: true
    }, (err, res) => {
        if (err) {
            callback('Unable to connect to geocoding service', undefined)
        } else if (res.body.features.length === 0) {
            callback('Unable to find location.  Try changing your search terms', undefined)
        } else {
            callback(undefined, {
                long: res.body.features[0].center[1],
                lat: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode