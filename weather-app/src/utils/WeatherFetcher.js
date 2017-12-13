import axios from 'axios';



const dailyWeather = "http://api.openweathermap.org/data/2.5/weather?q="
	const tail = "&APPID=a635f9cba0b622f2439388333f787edc"

const fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast?q="
const fiveDayTail = "&cnt=5"

let WeatherFetcher = {
	fetchDailyWeather: function(city) {
		let url = dailyWeather + city + tail;
		return axios.get(url);
	},
	fetchFiveDayWeather: function(city) {
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher; 