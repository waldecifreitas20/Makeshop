import { PropsWithChildren } from "react";

export function Row(props: PropsWithChildren<{ style?: string }>) {
  return <div className={`${props.style ?? ""} flex w-full gap-4 md:flex-nowrap items-center`}>
    {props.children}
  </div>
}