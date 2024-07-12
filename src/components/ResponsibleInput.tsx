import { ChangeEventHandler, LegacyRef, useRef } from "react";

interface ResponsibleInputProps {
  reference?: LegacyRef<any>;
  style?: string;
  placeholder?: string;
  id?: string;
  value?: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function ResponsibleInput(props: ResponsibleInputProps) {
  return <>
    <input
      ref={props.reference ?? useRef(null)}
      id={props.id ?? Math.random().toString()}
      className={`
        block 
        border border-zinc-300 rounded-full 
        w-full 
        px-5 py-2 
        text-lg
        outline-black

        md:py-2
        md:text-sm
        md:px-2

        lg:rounded-md
        ${props.style}
        `}
      value={props.value}
      type={props.type ?? "text"}
      placeholder={props.placeholder ?? ""}
      onChange={props.onChange}
    />
  </>
}