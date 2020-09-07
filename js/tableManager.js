const table = document.getElementById('resultTable')
let row
let cell
function fillTable(data) {
	row = document.createElement('tr')
	// row.innerHTML = `${data.x} ${data.y} ${data.r} ${data.y} ${data.isHit} ${data.dataTime} ${data.answerTime}`
	if (data.length !== 6) {
		throw new Error("Incorrect number of data elements! Can't create the data row.")
		// console.log("Incorrect number of data elements! Can't create the data row.")
		return
	}
	for (key in data) {
		cell = document.createElement('td')
		cell.innerHTML = data[key]
		row.append(cell)
	}
	table.append(row)
}