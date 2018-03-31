# Framer prototype link
https://framer.cloud/deXlO/

# Use desktop cursor
document.body.style.cursor = "default"

# Default animation props
Framer.Defaults.Animation =
	time: 0.1
	curve: Bezier.easeInOut

# Layer styles
checkbox = new Layer
	borderColor: "#CCCCCC"
	borderRadius: 3
	width: 16
	height: 16
	x: 40
	y: Align.center

checkboxB = checkbox.copy()
checkboxB.props =
	y: Align.center(36)

checkText = new Layer
	backgroundColor: null
	height: 14
	x: checkbox.x + (16+12)
	y: checkbox.midY - 8
	color: "#333333"
	html: "Buy coffee beanz"
	style:
		fontFamily: "Karla, Regular"
		fontSize: "14px"
		lineHeight: "1.2"

checkTextB = checkText.copy()
checkTextB.props =
	y: checkboxB.midY - 8
	html: "Do laundry"

checkline = new Layer
	width: 16
	height: 16
	backgroundColor: null
	superLayer: checkbox

checklineB = checkline.copy()
checklineB.superLayer = checkboxB

# SVG stroke animations
checkline.html = """<svg version="1.1" id="check" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}
	.st0{stroke-dashoffset:18.968;stroke-dasharray:18.968;animation:check_stroke 0.75s cubic-bezier(0.39, 0.575, 0.565, 1) normal forwards;}
@keyframes check_stroke{to{stroke-dashoffset:0;}}
</style>
<polyline id="check-line" class="st0" points="2.1,7.6 6.2,11.5 13.9,3.7 "/>
</svg>"""

checklineB.html = """<svg version="1.1" id="checkB" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
<style type="text/css">
	.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}
	.st1{stroke-dashoffset:18.968;stroke-dasharray:18.968;animation:checkB_stroke 0.75s cubic-bezier(0.39, 0.575, 0.565, 1) normal forwards;}
@keyframes checkB_stroke{to{stroke-dashoffset:0;}}
</style>
<polyline id="checkB-line" class="st1" points="2.1,7.6 6.2,11.5 13.9,3.7 "/>
</svg>"""

# Layer states
checkbox.states =
	selected:
		backgroundColor: "#7567F7"
		borderWidth: 0
	unselected:
		backgroundColor: "white"
		borderWidth: 1
checkbox.stateSwitch "unselected"

checkboxB.states = checkbox.states
checkboxB.stateSwitch "unselected"

# Events
checkbox.onClick ->
	checkbox.stateCycle("unselected", "selected")
	# Triggers SVG animation (kind of)
	checkStrokeAnimation = """.st0{animation-play-state:running;}"""
	Utils.insertCSS(checkStrokeAnimation)
	checkbox.animate
		scale: 0.85

checkboxB.onClick ->
	checkboxB.stateCycle("unselected", "selected")
	checkBStrokeAnimation = """.st1{animation-play-state:running;}"""
	Utils.insertCSS(checkBStrokeAnimation)
	checkboxB.animate
		scale: 0.85

# My attempt at resetting the stroke animation
checkbox.onAnimationEnd ->
	checkStrokeAnimation = """.st0{animation-play-state:initial;}"""
	Utils.insertCSS(checkStrokeAnimation)
	checkbox.animate
		scale: 1

checkboxB.onAnimationEnd ->
	checkBStrokeAnimation = """.st1{animation-play-state:initial;}"""
	Utils.insertCSS(checkBStrokeAnimation)
	checkboxB.animate
		scale: 1

# Initial animation play state for stroke animation
checkStrokeAnimation = """.st0{animation-play-state:initial;}"""
Utils.insertCSS(checkStrokeAnimation)

checkBStrokeAnimation = """.st1{animation-play-state:initial;}"""
Utils.insertCSS(checkBStrokeAnimation)
