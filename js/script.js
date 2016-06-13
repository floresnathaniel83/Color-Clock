
var timeNode = document.querySelector("#clock")
var overLayNode = document.querySelector("#overlay")
var hexaDecimalNode = document.querySelector("#hexadecimal-clock")
var barNode = document.querySelector("#bar")

	
var paddingZeroClock = function (hours, minutes, seconds, base) {

		if (hours < base) {

		 	timeNode.textContent = "0" + hours + ":"

		 	} else {

		 	timeNode.textContent = hours + ":"
		 	
		 	}

		 if (minutes < base) {

		 	timeNode.textContent = timeNode.textContent + "0" + minutes + ":"

		 } else {

		 	timeNode.textContent =  timeNode.textContent + minutes + ":"

		 }

		if (seconds < base) {

		 	timeNode.textContent = timeNode.textContent + "0" + seconds 

		 } else {


		 	timeNode.textContent =  timeNode.textContent + seconds 
		 }

	}



var paddingZeroHexClock = function (hours, minutes, seconds, base) {


		if (parseInt(hours, base) < base) {

			hexaDecimalNode.textContent = "0" + hours + ":" 

		} else {

			hexaDecimalNode.textContent = hours + ":" 

		}

		if (parseInt(minutes, base) < base) {
			
			hexaDecimalNode.textContent = hexaDecimalNode.textContent + "0" + minutes + ":" 

		} else {

			hexaDecimalNode.textContent = hexaDecimalNode.textContent + minutes + ":" 
		}

		if (parseInt(seconds, base) < base) {

			hexaDecimalNode.textContent = hexaDecimalNode.textContent + "0" + seconds

		} else {

			hexaDecimalNode.textContent = hexaDecimalNode.textContent + seconds

		}

	}


 var changeBackgroundColor = function (hours, minutes, seconds) {

	var updatedHexColor = "#" + hours + minutes + seconds

	overLayNode.style.background = updatedHexColor

	}

var toPx = function(val) {
	
	return val + 'px'
}

	
var barExpand = function(seconds) {

	if(seconds === 0) {

		barNode.style.width = toPx(1)

		//width starts at 1px and grows to 55px 1px at a time, if seconds equal zero then start back at 1px 
	} else {

		barNode.style.width = barNode.style.width + toPx(1)

	}
	
}

	

	


var update = function() {

	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()
	var s = today.getSeconds()

	var hexHourString = h.toString(16)
	var hexMinString = m.toString(16)
	var hexSecString = s.toString(16)

	// update clock readout
	
	paddingZeroClock(h, m, s, 10)
	
	//update hex readout	
	
	paddingZeroHexClock(hexHourString, hexMinString, hexSecString, 16)
	
	// update background
	
	changeBackgroundColor(hexHourString, hexMinString, hexSecString)

	// update expanding bar
	
	//barExpand(s)

}

setInterval(update, 1000)


// body = document.querySelector('body') >>>>>> how you can test <<<<<<
//var style = window.getComputedStyle(body, null)
//console.log(style.background)



//Color Change

// var backgroundNode = document.querySelector("body")


// var backgroundColorChange = function () {

// 	backgroundNode.style.background = "purple"
// 	backgroundNode.style.backgroundImage = "rgba(101,66,138)" //put into its own background container div
// 	console.log(style.backgroundImage)

// }

// setInterval(backgroundColorChange, 1000) 


//hover

