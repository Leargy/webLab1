let sendingButton = document.getElementById('sendingButton')
const informationText = document.getElementById('informationText')
sendingButton.setAttribute('disabled', 'disabled')
sendingButton.onclick = function() {
 	formRequest()
}
function validate() {
	let xFormValue = document.getElementById('xField').value
	let rFormValue = document.getElementById('rField').value
	let yValue = document.querySelector('input[name="Y"]:checked')
	if (xFormValue === "") {
		informationText.innerText = '"X" value should not be empty!'
		sendingButton.setAttribute('disabled', 'disabled')
		return
	}
	else if (yValue == null) {
		informationText.innerText = '"Y" value should not be empty!'
		sendingButton.setAttribute('disabled', 'disabled')
		return	
	}
	else if (rFormValue === "") {
		informationText.innerText = '"R" value should not be empty!'
		sendingButton.setAttribute('disabled', 'disabled')
		return
	}
	else {
		informationText.innerText = ''
	}
	xFormValue = xFormValue.replace(',', '.')
	rFormValue = rFormValue.replace(',', '.')
	if (!checkValue('X', +xFormValue)) {
		return
	}
	if (!checkValue('R', +rFormValue)) {
		return
	}
	sendingButton.removeAttribute('disabled')
	markUp(rFormValue)
}
//if "value" satisfies the condition - return it
function checkValue(target, value) {
	if (isNaN(value)) {
		informationText.innerText = `${target} value should be a number!`
		sendingButton.setAttribute('disabled', 'disabled')
		return false
	}
	switch(target) {
		case 'X': 
			if (value < -5 || value > 3) {
				informationText.innerText = '"X" value should be [-5;3]!'
				sendingButton.setAttribute('disabled', 'disabled')
				return false
			}
			break
		case 'R':
			if (value < 2 || value > 5) {
				informationText.innerText = '"R" value should be [2;5]!'
				sendingButton.setAttribute('disabled', 'disabled')
				return false
			}
			break
	}
	return true
}