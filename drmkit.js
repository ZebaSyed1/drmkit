var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "cat":
	var sound1 = new Audio("e.mp3");
	sound1.play();
	break;

	case "dog":
	var sound2 = new Audio("a.mp3");
	sound2.play();
	break;

	case "sheep":
	var sound3 = new Audio('c.mp3');
	sound3.play();
	break;

	case "cow":
	var sound4 = new Audio('f.mp3');
	sound4.play();
	
	break;

	case "duck":
	var sound5 = new Audio('b.mp3');
	sound5.play();
	break;

	case "pig":
	var sound6 = new Audio('d.mp3');
	sound6.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
