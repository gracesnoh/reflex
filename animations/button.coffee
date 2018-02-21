# Framer prototype link
https://framer.cloud/tfpXJ/

# Use desktop cursor
document.body.style.cursor = "auto"

# Default animation props
Framer.Defaults.Animation =
	time: 0.1
	curve: Bezier.easeInOut

# Button layer styles
button = new Layer 
	width: 110
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
	html: "BUTTON"
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
