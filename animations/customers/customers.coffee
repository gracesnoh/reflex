 # Framer prototype link: https://framer.cloud/UhqPL
 
 # Use desktop cursor
document.body.style.cursor = "auto"

# Default animation properties, 400ms and ease-in-out curve
Framer.Defaults.Animation = 
	time: 0.4
	curve: Bezier.easeInOut

# See all customers and arrow states; text color is #737373
seeAll.states =
	hidden:
		scale: 0.9
		opacity: 0
	visible:
		scale: 1
		opacity: 1
# Hide this by default
seeAll.stateSwitch "hidden"

# When logo div is hovered over, blur logos and show the See all customers element
# Logo colors are #DDD

hoverTarget.onMouseOver ->
	hoverTarget.style.cursor = "pointer"
	logos.animate
		blur: 6
		scale: 0.95
	seeAll.animate("visible")

# On mouse out, unblur logos and hide the See all customers element
hoverTarget.onMouseOut ->
	logos.animate
		blur: 0
		scale: 1
	seeAll.animate("hidden")
