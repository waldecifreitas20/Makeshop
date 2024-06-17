import { PropsWithChildren } from "react";

export function Modal(props: PropsWithChildren<{ style?: string }>) {

  return <>
    <div className="fixed top-0 h-screen w-full bg-black bg-opacity-20 flex justify-center items-center">
      {/* Modal */}
      <div className={`
        relative 
        border rounded-lg 
        bg-white 
        px-4 py-2 
        
        ${props.style ?? ""}
      `}>
        {props.children}
      </div>
    </div>
  </>
}