function copyToClipboard(value: string, callback: VoidFunction): void {
  window.navigator.clipboard.writeText(value)
    .then(callback);
}

function getBestBrands() {
  return [
    {
      "logoUrl": "./images/brand-absolute-ny.png",
      "name": "lancôme",
      "color": "bg-lime-500"
    },
    {
      "logoUrl": "./images/brand-lancome.png",
      "name": "absolute new york",
      "color": "bg-pink-500"
    },
    {
      "logoUrl": "./images/brand-sisley.png",
      "name": "sisley",
      "color": "bg-yellow-500"
    },
    {
      "logoUrl": "./images/brand-oceane.png",
      "name": "océane",
      "color": "bg-sky-500"
    },
    {
      "logoUrl": "./images/brand-payot.png",
      "name": "payot",
      "color": "bg-violet-500"
    },
    {
      "logoUrl": "./images/brand-roche-posay.png",
      "name": "la roche-posay",
      "color": "bg-red-500"
    }
  ]
}

export {
  copyToClipboard,
  getBestBrands,
}