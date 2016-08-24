
var hexaDecimalNode = document.querySelector("#hexadecimal-clock")
var timeNode = document.querySelector("#regular-clock")
var overLayNode = document.querySelector("#overlay")
var barNode = document.querySelector("#bar")

var time = function() {

	var today = new Date()
	var hrs = today.getHours()
	var mins = today.getMinutes()
	var secs = today.getSeconds()


	var addZero = function (number) {
		if (number < 10) {
			number = '0' + number
		}
		return number
	}

	// update clock readout
	
	hrs = addZero(hrs)
	mins = addZero(mins)
	secs = addZero(secs)

	timeNode.textContent = hrs + ":" + mins + ":" + secs

	//update hex readout
	
	var hexClock = function (number) {
		var newHex = number.toString(16)
		return newHex

	}	

	var hexHrs = hexClock(hrs)
	var hexMins = hexClock(mins) 
	var hexSecs = hexClock(secs) 

	hexaDecimalNode.textContent = hexHrs + ":" + hexMins + ":" + hexSecs
	
	// update background
	
var changeBackgroundColor = function (hours, minutes, seconds) {

	var updatedHexColor = "#" + hours + minutes + seconds

	overLayNode.style.background = updatedHexColor
	
	}
	
	changeBackgroundColor(hexHrs, hexMins, hexSecs)

	// update expanding bar
	
	barNode.style.width = secs + "%"


}

setInterval(time, 1000)




	
// body = document.querySelector('body') >>>>>> how you can test <<<<<<
//var style = window.getComputedStyle(body, null)
//console.log(style.background)



//Color Change

// var backgroundNode = document.querySelector("body")


// var backgroundColorChange = function () {


// 	backgroundNode.style.backgroundImage = "rgba(101,66,138)" //put into its own background container div
// 	console.log(style.backgroundImage)

// }

// setInterval(backgroundColorChange, 1000) 


//hover

