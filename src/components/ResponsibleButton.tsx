import { MouseEventHandler, PropsWithChildren } from "react";

interface ResponsibleButtonProps {
  onClick?: MouseEventHandler,
  style?: string,
  background? : string;
  textColor? : string;
  disabled?: boolean,
  disableAutoMargin?: boolean,
  type?: "button" | "submit" | "reset" | undefined,
}

export function ResponsibleButton(props: PropsWithChildren<ResponsibleButtonProps>) {
  return <>
    <button
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={`
      ${!props.disableAutoMargin? "mt-4 mb-2" : ""}
      block 
      w-full
      rounded-full
      py-2
      text-lg
      h-fit 
      transition-all duration-300  
      ${props.background ?? "bg-neutral-800 hover:bg-black"}  
      ${props.textColor ?? "text-white"}  
      
      md:text-sm
      md:py-2 
      
      lg:rounded-md
      ${props.style ?? ""}
      `} >{props.children}</button>
  </>;
}