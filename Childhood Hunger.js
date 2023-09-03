var childhood_hunger_header = document.getElementById("mission_statement_header")
var childhood_hunger_text = document.getElementById("mission_statement_text")
console.log(childhood_hunger_header)
childhood_hunger_text.style.display = 'none'
var toggle_track = 0

function toggleHide() {
	console.log("Toggling function accessed")
	if(toggle_track == 0) {
		childhood_hunger_text.style.display = 'block'
		toggle_track = 1
	}

	else if(toggle_track == 1){
		childhood_hunger_text.style.display = 'none'
		toggle_track = 0
	}
}