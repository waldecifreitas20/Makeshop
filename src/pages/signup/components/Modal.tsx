import { PropsWithChildren } from "react";

export function Modal(props: PropsWithChildren) {
  return <>
    <div className="absolute border w-[300px] h-[200px]">
      {props.children}
    </div>
  </>
}