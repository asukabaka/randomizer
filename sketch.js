

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
	 //create a class called randomizer button
	 button.class("randomizerButton");
}

function draw() {

	// if else statement to check if animation has run
	if(animating == true){
		//clear so it stops animating
		clear();
		//pull image from array and center in middle
		image(foodpics[imageCounter], width/2, height/2);
		//incrementing if the counter is less than food pics add an image
		if (imageCounter < foodpics.length - 1){
		imageCounter++;} else {
			imageCounter = 0;
		}
	}

}

function randomizer(){

	//animation starts at false so no animation
	animating = false;
	if (foods[0]) {
		// start with no image
		clear();
		if(animating == true){
			//clear to clear the previous image
		clear();
		//center image in middle of screen
		image(foodpics[imageCounter], width/2, height/2);
		//add to image counter if its under the amount of images in array
		if (imageCounter < foodpics.length - 1){
		imageCounter++;} else {
			imageCounter = 0;
		}
	}

	}


	if (foods[0]){
		fill(255,255,255);
		//display text with information from the array centered
		text(` Try ${foods[0].name} with ${foods[0].topping}`, width / 2, 50);
		foods.splice(randomIndex, 1);
	} else {
		//once you've tried all the foods show this slide
		background(random(200,255));
		text("nothing left!", 50, 50);
	}
}

// create a function for a button
function buttonPressed(){
	// start animation
	animating = true;
	//timeout adds a nice delay
	setTimeout(randomizer, 2000);
}
