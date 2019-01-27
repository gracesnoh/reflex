# Default animation
Framer.Defaults.Animation = 
	time: 0.5
	curve: Spring(damping: 0.5)

# Layer props and states
face.states =
	hidden:
		scale: 0
		y: Align.center()
	pop:
		scale: 1
		y: Align.center(-80)
face.stateSwitch "hidden"

control.props =
	style:
		cursor: "pointer"

# Control draggable props
control.draggable = true
control.draggable.vertical = false
control.draggable.constraints =
	x: 460
	width: 572
# Disable overdrag
control.draggable.overdrag = false
# Disable momentum 
control.draggable.momentum = false

# On drag, show face
control.onDragStart ->
	face.animate "pop"

# On drag stop, hide face
control.onDragEnd ->
	face.animate "hidden"

# Move face with control
control.onDragMove ->
	face.animate
		x: control.x - 18
		options:
			time: 0.3
	# 1 - Sad/Upset face
	if control.x <= 563
		for layer in [eye_right_sad, eye_left_sad, mouth_sad]
			layer.visible = true
		for layer in [eye_right, eye_left, mouth_frown]
			layer.visible = false
	# 2 - Disappointed/Annoyed face
	if control.x > 563 && control.x <= 669
		for layer in [eye_right, eye_left, mouth_frown]
			layer.visible = true
		for layer in [mouth_straight, eye_left_sad, eye_right_sad, mouth_sad]
			layer.visible = false
	# 3 - Straight/Default face
	if control.x > 669 && control.x <= 787
		for layer in [eye_right, eye_left, mouth_straight]
			layer.visible = true
		for layer in [mouth_smile, eye_right_happy, eye_left_happy, mouth_happy, mouth_frown, eye_right_sad, eye_left_sad, mouth_sad]
			layer.visible = false
	# 4 - Satisfied face
	if control.x > 787 && control.x <= 893
		for layer in [eye_right, eye_left, mouth_smile]
			layer.visible = true
		for layer in [mouth_straight, eye_right_happy, eye_left_happy, mouth_happy]
			layer.visible = false
	# 5 - Happy face
	if control.x > 893
		for layer in [eye_right_happy, eye_left_happy, mouth_happy]
			layer.visible = true
		for layer in [eye_right, eye_left, mouth_smile]
			layer.visible = false