import { PropsWithChildren } from "react";

export function LabelBlock(props: PropsWithChildren<{ label: string }>) {
  return <>
    <div className="my-2 w-full">
      <label className="capitalize">{props.label}</label>
      {props.children}
    </div>
  </>
}