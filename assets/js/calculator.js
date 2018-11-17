// JavaScript Document

// Change Display
function d(val) {
	document.getElementById("d").value = val;
}

// Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

// Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}

// Clear memory
function clear_mem() {
	if (typeof(Storage) !== "undefined") {
		localStorage.removeItem("memory");
	} else {
		console.log("Sorry, your browser does not support Web Storage...");
	}
	var temp = document.getElementById("d").value;
	document.getElementById("d").value = "Cleared!";
	setTimeout(function() {
		document.getElementById("d").value = temp;
	}, 1000);
}
// Recall memory
function recall_mem() {
	if (typeof(Storage) !== "undefined") {
		var mem = localStorage.getItem("memory");
		if(mem != "") {
			document.getElementById("d").value = mem;
		} else {
			var temp = document.getElementById("d").value;
			document.getElementById("d").value = "Error!";
			setTimeout(function() {
				document.getElementById("d").value = temp;
			}, 1000);
		}
	} else {
		console.log("Sorry, your browser does not support Web Storage...");
	}
}
// Save memory
function save_mem() {	
	var mem = document.getElementById("d").value;
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("memory", mem);
	} else {
		console.log("Sorry, your browser does not support Web Storage...");
	}
	var temp = document.getElementById("d").value;
	document.getElementById("d").value = "Saved!";
	setTimeout(function() {
		document.getElementById("d").value = temp;
	}, 1000);
}