import { useState } from "react";
import { utils } from "../../../utils/utils";

export function Banners(): Array<any> {
  const COUPON = "MAKE15OFF";

  const icons = {
    initial: <i className="fa-solid fa-copy text-pink-500 fa-lg" > </i>,
    copied: <i className="fa-solid fa-check text-green-500 fa-lg" > </i>,
  }
  let [buttonCopyIcon, setButtonCopyIcon] = useState(icons.initial);
  let [isBigBanner, setIsBigBanner] = useState(!utils.isSmallDevice());

  /* Make banner responsible to screen resizing */
  utils.onResizeScreen(() => {
    setIsBigBanner(!utils.isSmallDevice());
  });

  function copyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
  }
  return [
    <span className="relative block mx-auto h-full w-full">
      <img className="block w-full h-full mx-auto" src={`./images/banner1-${isBigBanner ? "big" : "small"}.png`} alt="" />

      <div className="w-full absolute bottom-2 lg:bottom-6 flex z-20 justify-center md:justify-end">
        <div className="w-2/4 sm:w-[40%] lg:w-[30%] flex justify-center md:mr-[15%] lg:mr-[20%]">''
          <input type="text"
            value="MAKE15OFF"
            readOnly disabled

            className="
            p-2 
            w-full
            cursor-pointer
            border-2
            rounded-md
            md:rounded-l-md
            md:border-y-2 md:border-l-2 border-dashed border-gray-100
            text-white text-center
            bg-white bg-opacity-20 
            
            md:text-xl
            lg:text-2xl
           
        "/>
          {
            !utils.isSmallDevice() ?
              <button
                className="
                bg-white 
                hover:bg-gray-200 
                text-pink-600 
                  border rounded-r-md 
                  p-2 
                  text-sm 
                  w-1/4"
                onClick={() => {
                  copyToClipboard(COUPON)
                  setButtonCopyIcon(icons.copied)
                }}>
                {buttonCopyIcon}
              </button> : <></>
          }
        </div>
      </div>
    </span >,

    <span className=" relative block w-full h-full mx-auto">
      <img className="block size-full" src={`./images/banner2-${isBigBanner ? "big" : "small"}.png`} alt="" />
    </span>
  ];
}