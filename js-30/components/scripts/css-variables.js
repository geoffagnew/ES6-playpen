const myImg = document.getElementById("mainImg");
const inputs = document.querySelectorAll(".controls input");

function updateValues () {
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

if (myImg) {
	inputs.forEach(	input => input.addEventListener("input", updateValues) );
}

// let spacingControl = document.getElementById("spacing");
// let blurControl = document.getElementById("blur");
// let colorControl = document.getElementById("color");

// function updateSpacing () {
// 	let paddingValue = spacingControl.value;
// 	myImg.setAttribute("style", `padding: ${paddingValue}px;`);
// }
// 
// function updateBlur () {
// 	let blurValue = blurControl.value;
// 	myImg.setAttribute("style", `filter: blur(${blurValue}px);`);
// }