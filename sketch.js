
let foods = [{
	name:"bibimbap",
	topping:"seaweed"
}, {

name: "ramen",
topping: "green onions"
},{
	name: "seafood pancake",
	topping: "soysauce"
},{
	name: "kimchi",
	topping: "seaseme seeds"
}];

let randomIndex;
let animating = false;
let foodpics = [];
let imageCounter = 0;
let button;


function preload(){
	for (let i = 0; i <= 3; i++){
		foodpics[i] = loadImage(`images/food_${i}.jpg`)
	}
}

function setup() {
	createCanvas(windowWidth*0.7,windowHeight*0.7);
	background('rgba(255,255,255,.2)');
	textSize(32);
	textAlign(CENTER);
	imageMode(CENTER);
	frameRate(8);
	console.log(foods[3]);
	console.log(foodpics);

	text("explore different Korean foods :-)", width / 2, height / 2);

	 button = createButton("Try a new dish ~");
	 button.mousePressed(buttonPressed);
	 button.class("randomizerButton");
}

function draw() {

	if(animating == true){
		clear();
		image(foodpics[imageCounter], width/2, height/2);
		if (imageCounter < foodpics.length - 1){
		imageCounter++;} else {
			imageCounter = 0;
		}
	}

}

function randomizer(){

	animating = false;
	if (foods[0]) {
		// clear();

	}


	if (foods[0]){
		fill(255,255,255);
		text(` Try ${foods[0].name} with ${foods[0].topping}`, width / 2, 50);
		foods.splice(randomIndex, 1);
	} else {
		background(random(200,255));
		text("nothing left!", 50, 50);
	}
}

function buttonPressed(){
	animating = true;
	setTimeout(randomizer, 2000);
}
