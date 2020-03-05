
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

function preload(){
	for (let i = 0; i <= 3; i++){
		foodpics[i] = loadImage(`images/food_${i}.jpg`)
	}
}

function setup() {
	createCanvas(600,600);
	background(200);

	console.log(foods[3]);
	console.log(foodpics);
}

function draw() {

	if(animating == true){
		image(foodpics[1], 0, 0);
	}

}

function randomizer(){

	animating = false;


	if (foods[0]){
		background(random(200, 255));
		randomIndex = int(random(foods.length));
		text(`${foods[randomIndex].name}'s favorite topping inspect ${foods[randomIndex].topping}`, 50, 50);
		foods.splice(randomIndex, 1);
	} else {
		background(random(200,255));
		text("nothing left!", 50, 50);
	}
}

function mousePressed(){
	animating = true;
	setTimeout(randomizer, 2000);
}
