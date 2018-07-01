 # Framer prototype link: https://framer.cloud/UhqPL
 
 # Use desktop cursor
document.body.style.cursor = "auto"

# Default animation properties, 400ms and ease-in-out curve
Framer.Defaults.Animation = 
	time: 0.4
	curve: Bezier.easeInOut

# 'See all element'
seeAll.states =
	hidden:
		scale: 0.9
		opacity: 0
	visible:
		scale: 1
		opacity: 1
# Hide this by default
seeAll.stateSwitch "hidden"

# On mouse over, blur and scale up logos (200ms) and show 'See all' element
hoverTarget.onMouseOver ->
	hoverTarget.style.cursor = "pointer"
	logos.animate
		blur: 6
		scale: 0.95
		options: 
			time: 0.2
	seeAll.animate("visible")

# On mouse out, unblur and scale down logos (200ms) and hide 'See all' element
hoverTarget.onMouseOut ->
	logos.animate
		blur: 0
		scale: 1
		options: 
			time: 0.2
	seeAll.animate("hidden")
