function formRequest() {
// 	let xParams = document.getElementById('xField').value
// 	let yParams = document.querySelector('input[name="Y"]:checked').value;
// 	let rParams = document.getElementById('rField').value
// 	console.log("X = " + xParams + " Y = " + yParams + " R = " + rParams)
// 	console.log(typeof $('[serialize="true"]').serialize())
	// $.get({
	// 	url: "php/process.php",
	// 	data: $('[serialize="true"]').serialize(),
	// 	headers: {
	// 	'Content-Type': 'application/x-www-form-urlencoded' // header
	// 	},
	// 	success: result=>{
	// 		    if(result) {
	// 		        let data = Cookies.get("data")
	// 		        console.log(data)
	// 	            // fillTable(data)
	// 		    }else {
	// 		        alert("Currupted data")
	// 		    }
	// 		}
	// });
	$('#xField')[0].value =$('#xField')[0].value.replace(',','.')
	$('#rField')[0].value =$('#rField')[0].value.replace(',','.')
	$.get("php/process.php", $('[serialize="true"]').serialize(), 'same-origin').then( 
			result=>{
				    if(result) {
				    	// document.cookie = "suck"
				        let data = Cookies.get("data")
				    	// console.log(data)
			            addLastData(JSON.parse("[" + data + "]"))
				    }else {
				        
				    }
				})
}