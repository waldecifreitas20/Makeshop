import { MutableRefObject } from "react";

function isSmallDevice(): boolean {
	return window.innerWidth < 768;
}
function onResizeScreen(callback: VoidFunction): void {
	window.addEventListener("resize", callback);
}

function getSubArray(array: Array<any>, fromIndex = 0, newLength = 5): Array<any> {
	let last = fromIndex + newLength;
	let subArray = [];

	for (let i = fromIndex; i < last; i++) {
		if (i + 1 >= array.length) {
			break;
		}
		subArray.push(array[i])
	}

	return subArray;
}

function isEmpty(array: Array<any> | string) {
	return array.length === 0;
}

function getRefContent(ref: MutableRefObject<any>) {
	return ref.current;
}

function hasEmptyFields(obj: object) {
	const fields = Object.values(obj);

	for (const field of fields) {
		if (field === "") {
			return true;
		}
	}
	return false;
}

export const utils = {
	isSmallDevice,
	onResizeScreen,
	getSubArray,
	isEmpty,
	hasEmptyFields,
	getRefContent,
}