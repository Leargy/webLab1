const table = document.getElementById('resultTable')
let row
let cell
let oldCookie
function addLastData(data) {

	if (data.length >= 9){
			deleted=data.splice(0,1)

			console.log("Deleted the first element, current length is:"+data.length)
			console.log("Deleted element:"+JSON.stringify(deleted))

			newdata=JSON.stringify(data).replace("[","").replace("]","")


			Cookies.set("data", newdata,{path: "/",sameSite:'lax'});
		}
	fillTable(data, true)
}
function fillTable(data, isLast) {
	for (let i = 0; i < data.length; i++) {
		if (isLast && i !== data.length - 1) {
			continue
		}
		row = document.createElement('tr')
		// if (data[i] !== 6) {
		// 	throw new Error("Incorrect number of data elements! Can't create the data row.")
		// 	// return
		// }

		//send data to draw a point
		if (isLast) {
			console.log(data[i]["X"] + data[i]["Y"] + data[i]["R"])
			drawPoint(data[i]["X"], data[i]["Y"], data[i]["R"])
		}


		for (key in data[i]) {
			cell = document.createElement('td')
			cell.innerHTML = data[i][key]
			cell.setAttribute('class', 'commonText')
			cell.setAttribute('id', 'resultCells')
			// cell.setAttribute('nowrap', 'true')
			// cell.setAttribute('overflow', 'auto')
			// console.log(data[i][key])
			row.append(cell)
		}
		table.append(row)
	}
}
function checkForCookie() {
	if (Cookies.get("data") !== undefined) {
		oldCookie = JSON.parse("[" + Cookies.get("data") + "]")
		fillTable(oldCookie, false)
	}
}
checkForCookie()