// let user set number of squares in grid
let val = prompt("Enter your brush size between 2 and 150")
if (val < 2 || val > 150) {
	alert("Please Choose A Value Between 2 and 150")
	reload()
}
//sets fixed grid size and variable pixels based on number
let size = 600 / val + "px"
console.log(size)
let brushColor = "gray"

//sets up display of grid on user size

for (var i = 0; i < val; i++) {
	var coll = document.createElement("div")
	coll.className = "coll"
	for (var j = 0; j < val; j++) {
		var row = document.createElement("div")
		row.className = "row"
		coll.appendChild(row)
		row.style.width = size
		row.style.height = size
	}
	document.getElementById("container").appendChild(coll)
}

//sets listener on mouse to paint
var box = document.getElementsByClassName("row")
var test = box.length

for (var i = 0; i < test; i++) {
	box[i].addEventListener("mouseover", function (e) {
		e.target.style.background = brushColor
	})
}
//links to buttons to change color
function change(color) {
	brushColor = color
}
//links to new sketch button to reload page
function reload() {
	location.reload()
}
// got a new computer so testing git link up