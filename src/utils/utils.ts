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

function getRefContent<Type>(ref: MutableRefObject<any>): Type {
	return ref.current as Type;
}

function hasEmptyFields(obj: object) {
	const values = Object.values(obj);
	
	if(values.length === 0) return true;

	for (const value of values) {
		if (value === "" || !value) {
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