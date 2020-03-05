
let foods = [{
	name:"bibimbap",
	topping:"seaweed"
}, {

name: "ramen",
topping: "green onions"
},{
	name: "seafood pancake",
	topping: "more seafood"
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
	createCanvas(800,800);
	textSize(32);
	textAlign(CENTER);
	background(200);
	imageMode(CENTER);
	frameRate(8);
	console.log(foods[3]);
	console.log(foodpics);

	text("are you hungry", width / 2, height / 2);

	 button = createButton("are you hungry");
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
		clear();

	}


	if (foods[0]){
		randomIndex = int(random(foods.length));
		image(random(foodpics), width / 2, height / 2);
		fill(255,255,255);
		text(`${foods[randomIndex].name}'s favorite topping inspect ${foods[randomIndex].topping}`, width / 2, 50);
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
