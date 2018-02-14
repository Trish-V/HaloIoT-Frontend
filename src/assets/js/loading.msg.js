

var splashMsges = [ "a coder looks both ways before crossing one way streets",
	"developers develop. and oh they eat too!",
	"eat, sleep, code",
	"do the impossible",
	"grab a cup of java, i mean coffe",
	"Women may not hit harder, but they hit lower",
	"If at first you don't succeed, skydiving is not for you!",
	"What are they planting to grow the seedless watermelon?",
	"there is no \"i\" in denial",
	"Algorithems are made for the weak",
	"Programming isn't what you know; it's what you can figure out",
	"You only live once, so get coding",
	"Simplycity is prerequisite for reliability",
	"Premature optimization is the root of all evil",
	"Your worst code is another coder's best",
	"A bug in the code is worth two in the documentation"
];


document.getElementById("loadingh").innerHTML=splashMsges[Math.floor(Math.random() * (9 - 1 + 1)) ];

function splash(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1)) + min;
}