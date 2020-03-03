
let foods = [{
	name:"bibimbap",
	topping:"seaweed"
}, {

name: "ramen",
topping: "greenonions"
},{
	name: "seafoodpancake",
	topping: "moreseafood"
},{
	name: "kimchi",
	topping: "seasemeseeds"
}];

let randomIndex;
let animating = false;

function setup() {
	createCanvas(600,600);
	background(200);

	console.log(foods[3]);
}

function draw() {

	if(animating == true){
		ellipse(random(width), random(height), random(50, 200));
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
