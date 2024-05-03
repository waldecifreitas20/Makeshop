function isMediumDevice() : boolean {
    return window.innerWidth >= 768;
}

function onResizeScreen(callback: VoidFunction) : void {
    window.addEventListener("resize", callback);
}

export { isMediumDevice, onResizeScreen }