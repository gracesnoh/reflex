# Tab switching animation
#For some reason, Framer won't allow specifying an origin for width changes (default is top-left). 
# So moving tabs from left -> right, the width behavior is strange, but moving tabs right -> left, the behavior is correct. 

# Framer prototype link


# Use desktop cursor
document.body.style.cursor = "auto"

# Default animation props
Framer.Defaults.Animation =
	time: 0.2
	curve: Bezier.easeInOut
	
# Layer styles

tabProps = {
	width: 100
	height: 40
	backgroundColor: null
	style:
		fontFamily: "Karla"
		fontSize: "13px"
		textAlign: "center"
		lineHeight: "40px"
		cursor: "pointer"
}

tab1 = new Layer
	html: "Home"

tab2 = new Layer
	html: "About"
	x: 100

tab3 = new Layer
	html: "Profile"
	x: 200
	
# Tab states
tab1.states =
	selected:
		color: "#333333"
	unselected:
		color: "#828282"
tab1.stateSwitch "selected"

for layer in [tab2, tab3]
	layer.states = tab1.states
	layer.stateSwitch "unselected"

for layer in [tab1, tab2, tab3]
	layer.props = tabProps

# Blob layer styles
blob = new Layer
	width: 6
	height: 6
	borderRadius: 100
	backgroundColor: "#4552E3"
	y: tab1.y + 33
	originX: 0.5

blob.states = 
	tab1:
		x: tab1.midX
	tab2:
		x: tab2.midX
	tab3:
		x: tab3.midX
	interim:
		width: 100

blob.stateSwitch("tab1")

switchTab = (view) ->
	interim = new Animation
		layer: view
		properties:
			width: 30
			
	interim.on "end", ->
		view.animate
			width: 6
	interim.start()
		
tab1.onClick ->
	switchTab blob
	blob.animate "tab1"
	tab1.animate "selected"
	for layer in [tab2, tab3]
		layer.animate "unselected"

tab2.onClick ->
	switchTab blob
	blob.animate "tab2"
	tab2.animate "selected"
	for layer in [tab1, tab3]
		layer.animate "unselected"

tab3.onClick ->
	switchTab blob
	blob.animate "tab3"
	tab3.animate "selected"
	for layer in [tab1, tab2]
		layer.animate "unselected"