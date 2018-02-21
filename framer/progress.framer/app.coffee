document.body.style.cursor = "auto"

# Default animation settings
Framer.Defaults.Animation =
	time: 0.1
	curve: Bezier.easeInOut
	
progressContainer = new Layer
	backgroundColor: "#EEEEEE"
	width: Screen.width
	height: 5

progressBar = new Layer
	backgroundColor: "#4552E3"
	height: 5

progressBar.states = 
	inactive:
		width: 0
	fifth:
		width: Screen.width / 5
	half:
		width: Screen.width / 2
	quarterClose:
		width: Screen.width / 1.5
	complete:
		width: Screen.width
		
progressBar.stateSwitch("inactive")

startProgress = (view) ->
	fifth = new Animation
		layer: view 
		properties:
			width: Screen.width / 5
		time: 0.5
	half = new Animation
		layer: view 
		properties:
			width: Screen.width / 2
		delay: 1
		time: 0.5
	quarterClose = new Animation
		layer: view 
		properties:
			width: Screen.width / 1.1
		delay: 2
		time: 0.5
	complete = new Animation
		layer: view 
		properties:
			width: Screen.width
		delay: 1
		time: 0.5
	fifth.onAnimationEnd ->
		half.start()
	half.onAnimationEnd ->
		quarterClose.start()
	quarterClose.onAnimationEnd ->
		complete.start()
	fifth.start()
	
# Button layer styles
button = new Layer 
	width: 185
	height: 40
	point: Align.center
	originX: 0.5
	originY: 0.5
	borderRadius: 4
	style:
		background: "-webkit-gradient(linear, left top, right bottom, color-stop(0%,#728AE9), color-stop(100%,#4552E3))"
		cursor: "pointer"

# Button text layer styles
buttonText = new Layer
	backgroundColor: null
	html: "START PROGRESS"
	color: "white"
	width: button.width
	height: button.height
	point: Align.center
	style:
		fontFamily: "Circular Std"
		fontStyle: "Medium"
		fontSize: "16px"
		letterSpacing: "1px"
		textAlign: "center"
		lineHeight: "40px"

# Save button properties
buttonProps = button.props
buttonTextProps = buttonText.props

# Button states
button.states =
	scaleDown:
		scale: 0.95
		borderRadius: 3
		animationOptions:
			time: 0.2
	scaleUp: 
		scale: 1
		borderRadius: 4
		animationOptions:
			time: 0.2
	mouseDown:
		opacity: 0.75
		scale: 0.95
		y: buttonProps.y + 2
	mouseUp:
		opacity: 1
		y: buttonProps.y

buttonText.states =
	mouseDown:
		y: buttonTextProps.y + 2
	mouseUp:
		y: buttonTextProps.y

# Mouse events and animations
button.onClick ->
	startProgress progressBar

button.onMouseOver ->
	button.animate("scaleDown")

button.onMouseOut ->
	button.animate("scaleUp")

button.onMouseDown ->
	button.animate("mouseDown")
	buttonText.animate("mouseDown")

button.onMouseUp ->
	button.animate("mouseUp")
	buttonText.animate("mouseUp")
	