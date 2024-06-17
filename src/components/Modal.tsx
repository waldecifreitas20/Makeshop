import { PropsWithChildren } from "react";

export function Modal(props: PropsWithChildren) {
  
  return <>
    <div className="fixed top-0 h-screen w-full bg-black bg-opacity-20 flex justify-center items-center">
      {/* Modal */}
      <div className="relative border bg-white px-4 py-5 rounded-lg w-[90%] sm:w-[70%] md:max-w-[500px]">
        {props.children}
      </div>
    </div>
  </>
}