

//create array foods
let foods = [{
	//create object
	name:"bibimbap",
	topping:"seaweed"
}, {
//create object
name: "ramen",
topping: "green onions"
},{
	//create object
	name: "seafood pancake",
	topping: "soysauce"
},{
	//create object
	name: "kimchi",
	topping: "seaseme seeds"
}];

//create variable randomIndex
let randomIndex;
//creat variable animating = false so the animation starts at false state
let animating = false;
//create foodpics array
let foodpics = [];
//image counter will start at zero
let imageCounter = 0;
//create variable button
let button;


function preload(){
	//preload food pictures from 0 to 3
	for (let i = 0; i <= 3; i++){
		//food picture naming schema loaded into foodpics array
		foodpics[i] = loadImage(`images/food_${i}.jpg`)
	}
}

function setup() {
	// standard setup
	createCanvas(windowWidth*0.7,windowHeight*0.7);
	background('rgba(255,255,255,.2)');
	textSize(32);
	textAlign(CENTER);
	imageMode(CENTER);
	frameRate(8);
	//console logging images being loaded
	console.log(foods[3]);
	console.log(foodpics);

//create text centered in the middle of the screen
	text("explore different Korean foods :-)", width / 2, height / 2);
//create button
	 button = createButton("Try a new dish ~");
	 //button with function buttonPressed
	 button.mousePressed(buttonPressed);
	 //
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
		if(animating == true){
		clear();
		image(foodpics[imageCounter], width/2, height/2);
		if (imageCounter < foodpics.length - 1){
		imageCounter++;} else {
			imageCounter = 0;
		}
	}

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
