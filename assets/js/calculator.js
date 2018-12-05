function hasLocalStorage() {
	var testingLS = 'testingLS';
	try {
		localStorage.setItem(testingLS, testingLS);
		localStorage.removeItem(testingLS);
		return true;
	}
	catch (e) {
		console.log('Sorry, your browser does not support Web Storage...');
		return false;
	}
}

var Calculator = {
	display: function(val) {
		// change the display
		document.getElementById("d").value = val;
	},
	type: function(val) {
		// type numbers and operators
		document.getElementById("d").value += val;
	},
	e: function() {
		// evaluate the equation
		try {
			this.display(eval(document.getElementById("d").value));
		}
		catch(err) {
			d("Error");
		}
	},
	saveMem: function() {
		var mem = document.getElementById("d").value;

		// check if browser supports localStorage
		if (hasLocalStorage()) {
			localStorage.setItem("CalculatorData", mem);
		}

		// temporarily hold what was displayed
		var temp = document.getElementById("d").value;
		// indicate the save succeeded
		document.getElementById("d").value = "Saved!";
		// replace the value that was there before
		setTimeout(function() {
			document.getElementById("d").value = temp;
		}, 1000);
	},
	recallMem: function() {
		// check if browser supports localStorage
		if (hasLocalStorage()) {
			var mem = localStorage.getItem("CalculatorData");
			// check if there was anything stored in memory
			if(mem != null) {
				document.getElementById("d").value = mem;
			}
			// nothing was stored in memory --> output error
			else {
				// temporarily hold what was displayed
				var temp = document.getElementById("d").value;
				// indicate error message
				document.getElementById("d").value = "Error";
				// replace the value that was there before
				setTimeout(function() {
					document.getElementById("d").value = temp;
				}, 1000);
			}
		}
	},
	clearMem: function() {
		// check if browser supports localStorage
		if (hasLocalStorage()) {
			localStorage.removeItem("memory");
		}

		// temporarily hold what was displayed
		var temp = document.getElementById("d").value;
		// indicate successfully cleared
		document.getElementById("d").value = "Cleared";
		// replace the value that was there before
		setTimeout(function() {
			document.getElementById("d").value = temp;
		}, 1000);
	}
}
