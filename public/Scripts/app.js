// Yusuke Kuroki(301137023) Sept.29 --app.js
// IIFE -- Immediately invoked Function Expression
(function() {
	function Start() {
		console.log("App Started...");
	}

	window.addEventListener("load", Start);
})();

// Send process on Contact
var send = document.getElementById('send');

send.addEventListener('click', function() {
	alert("Contact is currently unable.");
})