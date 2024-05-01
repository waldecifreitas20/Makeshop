function isMediumDevice() {
    return window.innerWidth >= 768;
}

function onResizeScreen(callback: VoidFunction) {
    window.addEventListener("resize", callback);
}

export { isMediumDevice, onResizeScreen }