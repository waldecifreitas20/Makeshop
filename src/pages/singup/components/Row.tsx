import { PropsWithChildren } from "react";

export function Row(props: PropsWithChildren<{ style?: string }>) {
  return <div className={`${props.style ?? 'flex w-full bg-blue-500 justify-between'}`}>
    {props.children}
  </div>
}