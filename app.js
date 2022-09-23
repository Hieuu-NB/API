var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibiliti = document.querySelector('.visibiliti span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')


function changeWeatherUI(){
	search.value.trim()
	let apiURL = `api.openweathermap.org/data/2.5/weather?q={city name}&appid=30785d08102980c3b9c4cfff8ac35127`
}