import { PropsWithChildren } from "react";

export function Modal(props: PropsWithChildren) {

  return <>
    <div className="fixed top-0 h-screen w-full bg-black bg-opacity-20 flex justify-center items-center">
      {/* Modal */}
      <div className="relative border  bg-white w-[300px] h-[200px]">
        {props.children}
      </div>
    </div>
  </>
}