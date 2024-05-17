const copyToClipboard = (value: string, callback: VoidFunction) => {
	window.navigator.clipboard.writeText(value)
		.then(callback);
}

export {
  copyToClipboard,
}