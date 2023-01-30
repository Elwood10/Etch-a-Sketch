// let user set number of squares in grid

let val = prompt("Pick a Size, Number between 1 and 100")

//sets up display of grid on user size

for (var i = 0; i < val; i++) {
	var coll = document.createElement("div")
	coll.className = "coll"
	for (var j = 0; j < val; j++) {
		var row = document.createElement("div")
		row.className = "row"
		coll.appendChild(row)
	}
	document.getElementById("container").appendChild(coll)
}

//first attempt to paint grid squares - only works on last grid - no go
var box = document.getElementsByClassName("row")
var test = box.length

for (let i = 0; i < test; i++) {
	box[i].addEventListener("mouseover", (event) => {
		row.className = "yellow"
	})
}
