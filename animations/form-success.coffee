# Framer cloud prototype
https://framer.cloud/nHmFD/

# Use desktop cursor
document.body.style.cursor = "auto"

# Blinking cursor loop
blink = (view) ->
	hideCursor = new Animation
		layer: view
		properties:
			opacity: 0
		time: 0.2
		delay: 0.5
	showCursor = hideCursor.reverse()
	hideCursor.on "end", ->
		showCursor.start()
	showCursor.on "end", ->
		hideCursor.start()
	hideCursor.start()
	
blink typecursor

# Form popUp animation
popUp = (view) ->
	up = new Animation
		layer: view
		properties:
			y: view.y - 3
		curve: Bezier.easeOut
		time: 0.06
	up.on "end", ->
		view.animate
			y: view.y + 3
			options:
				time: 0.1
				curve: Bezier.easeOut
	up.start()

# Check icon initial state
check.scale = 0
# Check icon popIn animation
popIn = (view) ->
	overshoot = new Animation
		layer: view
		properties:
			scale: 1.1
		curve: Bezier.easeInOut
		time: 0.08
	overshoot.on "end", ->
		view.animate
			scale: 1
			options:
				curve: Bezier.easeInOut
				time: 0.02
	overshoot.start()

# On click first name input, show success
firstNameInput.onClick (event, layer) ->
	# Move type cursor
	typecursor.x = 238
	typecursor.y = 252
	
	# Form validation
	emailInput.animate
		borderColor: "#66BB66"
		options:
			time: 0.1
	email.animate
		color: "#66BB66"
		options:
			time: 0.1
			
	# Apply popUp animations
	popUp emailInput, popUp email, popUp check
	
	# Check icon scale in
	popIn check
