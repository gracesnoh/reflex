# This is a search input loading animation. 
# On submit, the input line will animate to indicate loading results. 
# When loading completes, the input line will stop animating.

# Framer prototype link
https://framer.cloud/EZtNx

# Use desktop cursor
document.body.style.cursor = "auto"

# Input layer style
input = new InputModule.Input 
	placeholder: "Search"
	width: 400
	height: 36
	x: Align.center
	y: 40
	fontFamily: "Karla"
	color: "#565656"
	lineHeight: "36px"
	padding: "0 6px"
	fontSize: "14px"
	fontStyle: "Regular"
	virtualKeyboard: false

inputLine = new Layer
	width: 400
	height: 1
	superLayer: input
	backgroundColor: "#cccccc"
	y: Align.bottom

inputLoadLine = new Layer
	width: 200
	height: 1
	superLayer: inputLine
	backgroundColor: "#565656"
	x: -200
	y: Align.bottom

# Clip inputLoadLine layer to inputLine
inputLine.clip = true

# Looping inputLoadLine animation chain
passThrough = new Animation
	layer: inputLoadLine
	properties:
		x: 500
	time: 1
	curve: Bezier.easeInOut
	delay: 0.5

restart = new Animation
	layer: inputLoadLine 
	properties:
		x: -200
	time: 0

passThrough.onAnimationEnd ->
	restart.start()
restart.onAnimationEnd ->
	passThrough.start()

# On search submit, start looping animation
input.on "submit", ->
	passThrough.start()

# Instructions
instructionalText = new Layer
	width: 400
	height: 100
	backgroundColor: null
	x: Align.center
	y: 100
	html: "Instructions: Type something & press enter to trigger input loading animation"
	style:
		fontFamily: "Karla"
		color: "#4552E3"
		lineHeight: "36px"
		padding: "0 6px"
		fontSize: "9px"
		fontStyle: "Regular"