# Use desktop cursor
document.body.style.cursor = "auto"

# Initial badge state
badge.scale = 0

# Set origin anchor for bell rotation
bell.originX = 0.5
bell.originY = 0
m
# Bell shake animation
shake = (view, times=4) ->
  i = 0
  right = new Animation
    layer: view
    properties: 
      rotation: 7
    curve: Bezier.easeOut
    time: 0.07
  left = new Animation
    layer: view
    properties: 
      rotation: -7
    curve: Bezier.easeOut
    time: 0.07
  right.on "end", ->
    if i < times
      left.start()
      i++
    else
      view.animate
        properties:
          rotation: 0
        time: 0.1
  left.on "end", ->
    if i < times
      right.start()
      i++
    else
      view.animate
        properties:
          rotation: 0
        time: 0.08
  right.start()

# Badge popIn animation
popIn = (view) ->
	overshoot = new Animation
		layer: view
		properties:
			scale: 1.2
		curve: Bezier.easeInOut
		time: 0.05
	scaleFinish = new Animation
		layer: view
		properties:
			scale: 1
		curve: Bezier.easeInOut
		time: 0.05
	overshoot.on "end", ->
		scaleFinish.start()
	scaleFinish.on "end", ->
		view.animate
			scale: 0
			options:
				time: 0.1
				curve: Bezier.easeInOut
				delay: 1
	overshoot.start()

animateButton = new Layer
	width: 116
	height: 36
	x: 228
	y: 232
	backgroundColor: "white"
	shadowY: 1
	shadowColor: "rgba(252, 29, 148, 0.5)"
	shadowBlur: 4
	borderRadius: 2
	index: -101
	parent: Apple_MacBook_Pro
	
# On btn click, trigger animations
animateButton.onClick (event, layer) ->
	shake bell
	popIn badge

animateButton.onMouseOver (event, layer) ->
	@style.cursor = 'pointer'
	animateButton.animate
		shadowBlur: 6
		options:
			time: 0.1
			curve: Bezier.easeInOut
	for layer in [animateButton, animate]
		layer.animate
			y: layer.y - 1
			options:
				time: 0.1
				curve: Bezier.easeInOut

animateButton.onMouseOut (event, layer) ->
	animateButton.animate
		shadowBlur: 4
		options:
			time: 0.1
			curve: Bezier.easeInOut	
	for layer in [animateButton, animate]
		layer.animate
			y: layer.y + 1
			options:
				time: 0.1
				curve: Bezier.easeInOut	
