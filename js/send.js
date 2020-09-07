function formRequest() {
// 	let xParams = document.getElementById('xField').value
// 	let yParams = document.querySelector('input[name="Y"]:checked').value;
// 	let rParams = document.getElementById('rField').value
// 	console.log("X = " + xParams + " Y = " + yParams + " R = " + rParams)
// 	console.log(typeof $('[serialize="true"]').serialize())
	$.get({
		url: "php/process.php",
		data: $('[serialize="true"]').serialize(),
		success: result=>{
			    if(result) {
			        let data = Cookies.get("data")
			        console.log(data)
		            // fillTable(data)
			    }else {
			        alert("Currupted data")
			    }
	});
	// $.get("php/process.php", $('[serialize="true"]').serialize(), result=>{
	//     if(result) {
	//         let data = Cookies.get("data")
	//         console.log(data)
 //            // fillTable(data)
	//     }else {
	//         alert("Currupted data")
	//     }
	// });
}