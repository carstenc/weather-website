const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=453bd82124c19533cfed659918cf1767&query=' + latitude + ',' + longitude + '&units=f'
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service', undefined)
		} else if (body.error) {
			console.log(body.error)
			callback('Unable to find location', undefined)
		} else {
			callback(
				undefined,
				body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees. It feels like ' +
				body.current.feelslike + ' degrees. Humitity is ' + body.current.humidity + '%')
		}
	})
}

module.exports = forecast