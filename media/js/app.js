// snap.js nav pane
var navPane = new Snap({
	element: document.getElementById('snap-content-wrapper'),
	disable: 'right',
	slideIntent: 30,
	minDragDistance: 20,
	minPosition: -205
});
$('.toggle-navigation').on('click', function() {
	if (navPane.state().state == 'left') {
		navPane.close();
	} else {
		navPane.open('left');
	}
	return false;
});