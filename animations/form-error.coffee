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

# Form shake animation
shake = (view, times=4) ->
  i = 0
  right = new Animation
    layer: view
    properties: 
      x: view.x + 3
    curve: "bezier-curve"
    time: 0.06
  left = new Animation
    layer: view
    properties: 
      x: view.x - 3
    curve: "bezier-curve"
    time: 0.06
  right.on "end", ->
    if i < times
      left.start()
      i++
    else
      view.animate
        properties:
          x: view.x-3
        time: 0.08
  left.on "end", ->
    if i < times
      right.start()
      i++
    else
      view.animate
        properties:
          x: view.x+3
        time: 0.08
  right.start()

# On click first name input, throw error
firstNameInput.onClick (event, layer) ->
	# Move type cursor
	typecursor.x = 238
	typecursor.y = 252
	
	# Form validation
	emailInput.animate
		borderColor: "#EE4444"
		options:
			time: 0.1
	email.animate
		color: "#EE4444"
		options:
			time: 0.2

	# Apply shake animations
	shake emailInput
	shake email
	
