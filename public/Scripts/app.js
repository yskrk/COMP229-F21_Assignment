// Yusuke Kuroki(301137023) Sept.29 --app.js

// IIFE -- Immediately invoked Function Expression
(function() {
	function Start() {
		console.log("App Started...");

		let deleteButtons = document.querySelectorAll('.btn-danger');
		
		for (button of deleteButtons) {
			button.addEventListener('click', (event) => {
				if (!confirm("Are you sure?")) {
					event.preventDefault();
					window.location.assign('/book-list');
				}
			});
		}
	}

	window.addEventListener("load", Start);
})();

// Send process on Contact
var send = document.getElementById('send');

send.addEventListener('click', function() {
	alert("Contact is currently unable.");
})