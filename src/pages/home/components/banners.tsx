import { useState } from "react";
import { isSmallDevice, onResizeScreen } from "../../../utils/utils";
import { copyToClipboard } from "../Home.methods";



export function Banners(): Array<any> {
  const COUPON = "MAKE15OFF";
  const icons = {
    copied: <i className="fa-solid fa-check text-green-500 fa-lg" > </i>,
    initial: <i className="fa-solid fa-check text-green-500 fa-lg" > </i>,
  }
  let [buttonCopyIcon, setButtonCopyIcon] = useState(icons.initial);
  let [isBigBanner, setIsBigBanner] = useState(!isSmallDevice());

  /* Make banner responsible to screen resizing */
  onResizeScreen(() => {
    setIsBigBanner(!isSmallDevice());
  });


  return [
    <span className="relative block mx-auto h-full w-full">
      <img className="block w-full h-full mx-auto" src={`./images/banner1-${isBigBanner ? "big" : "small"}.png`} alt="" />

      <div className="w-full absolute bottom-2 lg:bottom-6 flex z-20 justify-center md:justify-end">
        <div className="w-2/4 sm:w-[40%] lg:w-[30%] flex justify-center md:mr-[15%] lg:mr-[20%]">''
          <input type="text"
            value="MAKE15OFF"
            readOnly disabled

            className="
            rounded-l-md
            p-2 
            w-full
            cursor-pointer
            border-y-2 border-l-2 border-dashed border-gray-100
            text-white text-center
            bg-white bg-opacity-20 
            
            md:text-xl
            lg:text-2xl
           
        "/>
          <button className="bg-white hover:bg-gray-200 text-pink-600 border rounded-r-md p-2 text-sm w-1/4" onClick={() => copyToClipboard(COUPON, () => {
            setButtonCopyIcon(icons.copied)
          })}>
            {buttonCopyIcon}
          </button>
        </div>
      </div>
    </span>,

    <span className=" relative block w-full h-full mx-auto">
      <img className="block size-full" src={`./images/banner2-${isBigBanner ? "big" : "small"}.png`} alt="" />
    </span>
  ];
}