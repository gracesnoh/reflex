# This is a skeleton screen loading animation.
# Content will load progressively (top-down), and each element (image, title, text) will have it's own loading line.
# Loading lines are progressive as well, giving a waterfall or cars passing by effect.

# Framer prototype link
https://framer.cloud/kWcpV

# Defaults
document.body.style.cursor = "default"

Framer.Defaults.Animation = 
	time: 0.5
	curve: Bezier.easeInOut

# ImageBox layer (container for images)
imageBox = new Layer
	x: 60
	y: 70
	opacity: 0
	width: 240
	height: 120
	backgroundColor: "#EEE"

# Image loader layer (small black line moving across the top)
imageLoading = new Layer
	superLayer: imageBox
	width: 60
	height: 2
	backgroundColor: "#DDD"

# Clip the line to the imageBox layer
imageBox.clip = true

# Animation that moves line through layer to indicate loading
loadThrough = (view) ->
	moveRight = new Animation
		layer: view
		properties:
			x: imageBox.x + imageBox.width
		time: 1
		curve: Bezier.easeInOut
	reset = new Animation
		layer: view
		properties:
			x: imageBox.x - 120
		time: 0
	moveRight.onAnimationEnd ->
		reset.start()
	reset.onAnimationEnd ->
		moveRight.start()
	moveRight.start()

# Apply above animation to imageLoading layer
loadThrough imageLoading

# Move empty image up and bring to 100 opacity 
imageBox.animate
	y: 60
	opacity: 1

# TitleBox layer (container for titles)
titleBox = new Layer
	x: 60
	y: imageBox.y + imageBox.height + 12 + 12
	opacity: 0
	width: 200
	height: 24
	backgroundColor: "#EEE"
	color: "#565656"
	style:
		fontSize: "14px"
		fontFamily: "Karla-Bold"

# Title loader layer (small black line moving across the top)
titleLoading = new Layer
	superLayer: titleBox
	width: 60
	height: 2
	backgroundColor: "#DDD"

titleBox.clip = true

# Delay the title box appearance by 200 ms
Utils.delay 0.2, ->
	titleBox.animate
		y: 60+120+12
		opacity: 1
	# Start line loading animation
	loadThrough titleLoading

# First text line layer
textLine1 = new Layer
	x: 60
	y: 60+120+12+24+12+12
	opacity: 0
	width: 240
	height: 2
	backgroundColor: "#EEE"
	width: 240

textLine1Loading = new Layer
	superLayer: textLine1
	width: 60
	height: 2
	backgroundColor: "#DDD"

textLine1.clip = true

# After a delay of 200 more ms, (total 400 ms), start first text line loading animation
Utils.delay 0.4, ->
	textLine1.animate
		y: 60+120+12+24+12
		opacity: 1
	loadThrough textLine1Loading

# Second text line layer
textLine2 = new Layer
	x: 60
	y: 60+120+12+24+12+12+20
	opacity: 0
	width: 240
	height: 2
	backgroundColor: "#EEE"
	width: 240

textLine2Loading = new Layer
	superLayer: textLine2
	width: 60
	height: 2
	backgroundColor: "#DDD"

textLine2.clip = true

# After a delay of 200 more ms, (total 600 ms), start second text line loading animation
Utils.delay 0.6, ->
	textLine2.animate
		y: 60+120+12+24+12+18
		opacity: 1
	loadThrough textLine2Loading

# Third text line layer
textLine3 = new Layer
	x: 60
	y: 60+120+12+24+12+12+20+20
	opacity: 0
	width: 240
	height: 2
	backgroundColor: "#EEE"
	width: 240

textLine3Loading = new Layer
	superLayer: textLine3
	width: 60
	height: 2
	backgroundColor: "#DDD"

textLine3.clip = true

# After a delay of 200 more ms, (total 800 ms), start second text line loading animation
Utils.delay 0.8, ->
	textLine3.animate
		y: 60+120+12+24+12+18+20
		opacity: 1
	loadThrough textLine3Loading

# Dummy text layer
loadedText = new TextLayer
	text: "Amidst the intensity of last night's basketball game between our very own Bears vs UCLA Bruins, you can see Oski..."
	fontFamily: "Karla, sans-serif"
	color: "black"
	fontSize: 12
	width: 240
	x: 60
	y: 60+120+12+24+6
	lineHeight: 1.5
	visible: false

# After 3s have passed, load content 
Utils.delay 3, ->
	imageBox.image = "images/oski.PNG"
	imageLoading.visible = false
	
	# Slight delays added for loading effect
	Utils.delay 0.5, ->
		titleBox.backgroundColor = null
		titleLoading.visible = false
		titleBox.html = "Oski surveys basketball game"
	
	Utils.delay 0.7, ->
		for layer in [textLine1, textLine1Loading, textLine2, textLine2Loading, textLine3, textLine3Loading]
			layer.visible = false
		loadedText.visible = true

# Everything below this line is a copy of the above component, just to demonstrate a looping version of the loading animation.
imageBoxCopy = new Layer
	x: 60
	y: 300+12
	opacity: 0
	width: 240
	height: 120
	backgroundColor: "#EEE"

imageLoadingCopy = new Layer
	superLayer: imageBoxCopy
	width: 60
	height: 2
	backgroundColor: "#DDD"

imageBoxCopy.clip = true

Utils.delay 1, ->
	loadThrough imageLoadingCopy
	imageBoxCopy.animate
		y: 300
		opacity: 1
		
titleBoxCopy = new Layer
	x: 60
	y: imageBoxCopy.y + imageBoxCopy.height + 12
	opacity: 0
	width: 200
	height: 24
	backgroundColor: "#EEE"
	color: "#565656"
	style:
		fontSize: "14px"
		fontFamily: "Karla-Bold"

titleLoadingCopy = new Layer
	superLayer: titleBoxCopy
	width: 60
	height: 2
	backgroundColor: "#DDD"

titleBoxCopy.clip = true

Utils.delay 1.2, ->
	titleBoxCopy.animate
		y: 300+120+12
		opacity: 1
	loadThrough titleLoadingCopy

# First text line layer
textLine1Copy = new Layer
	x: 60
	y: 300+120+12+24+12+12
	opacity: 0
	width: 240
	height: 2
	backgroundColor: "#EEE"
	width: 240

textLine1LoadingCopy = new Layer
	superLayer: textLine1Copy
	width: 60
	height: 2
	backgroundColor: "#DDD"

textLine1Copy.clip = true

Utils.delay 1.4, ->
	textLine1Copy.animate
		y: 300+120+12+24+12
		opacity: 1
	loadThrough textLine1LoadingCopy
	
textLine2Copy = new Layer
	x: 60
	y: 300+120+12+24+12+12+20
	opacity: 0
	width: 240
	height: 2
	backgroundColor: "#EEE"
	width: 240

textLine2LoadingCopy = new Layer
	superLayer: textLine2Copy
	width: 60
	height: 2
	backgroundColor: "#DDD"

textLine2Copy.clip = true

Utils.delay 1.6, ->
	textLine2Copy.animate
		y: 300+120+12+24+12+18
		opacity: 1
	loadThrough textLine2LoadingCopy

textLine3Copy = new Layer
	x: 60
	y: 300+120+12+24+12+12+20+20
	opacity: 0
	width: 240
	height: 2
	backgroundColor: "#EEE"
	width: 240

textLine3LoadingCopy = new Layer
	superLayer: textLine3Copy
	width: 60
	height: 2
	backgroundColor: "#DDD"

textLine3Copy.clip = true

Utils.delay 0.8, ->
	textLine3Copy.animate
		y: 300+120+12+24+12+18+20
		opacity: 1
	loadThrough textLine3LoadingCopy