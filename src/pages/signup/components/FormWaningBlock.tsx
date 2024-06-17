import { PropsWithChildren } from "react";

export function FormWarningBlock(props: PropsWithChildren) {
  return <>
    <ul className="mx-2">
      {props.children}
    </ul>
  </>
}