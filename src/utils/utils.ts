function isSmallDevice() {
	return window.innerWidth < 768;
}
function onResizeScreen(callback: VoidFunction): void {
	window.addEventListener("resize", callback);
}

export {
	isSmallDevice,
	onResizeScreen,
}