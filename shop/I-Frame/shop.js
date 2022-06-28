document.getElementById("yes").addEventListener('click', function(e) {
		document.getElementById("yes").innerText = "Yes"
		setTimeout(function() {
			document.getElementById("yes").innerText = "hi"
		},2000)
	}
)