
let foods = [{
	name:"bibimbap",
}, {

name: "ramen"
},{
	name: "hotcheetos"
},{
	name: "kimchi"
}];

function setup() {
	createCanvas(600,600);
	background(200);

	console.log(foods[3]);
}

function draw() {

}

function mousePressed(){
	if (foods[0]){
		background(random(200, 255));
		randomIndex = int(random(foods.length));
		text(foods[randomIndex].name, 50, 50);
		foods.splice(randomIndex, 1);

	}
}
