function setItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key: string) {
  const item = localStorage.getItem(key);

  if (!item) {
    throw Error("No object found at local storage");
  }

  return JSON.parse(item);
}

function clear() {
  localStorage.clear();
}

export const storageServices = {
  setItem, getItem, clear

}