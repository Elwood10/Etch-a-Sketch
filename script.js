for (var i = 0; i < 5; i++) {
	var coll = document.createElement("div")
	coll.className = "coll"
	for (var j = 0; j < 5; j++) {
		var row = document.createElement("div")
		row.className = "row"
		coll.appendChild(row)
	}
	document.getElementById("container").appendChild(coll)
}
