import { DetailedHTMLProps } from "react";

interface ResponsibleInputProps {
  placeholder?: string;
  type?: string;
  id?: string;
}

export function ResponsibleInput(props: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return <>
    <input
      id={props.id ?? ""}
      className="
        block 
        border border-zinc-400 rounded-full 
        w-full 
        px-5 py-2 
        text-lg
        outline-black

        md:py-2
        md:text-sm
        md:px-2

        lg:rounded-md
      "
      type={props.type ?? "text"}
      placeholder={props.placeholder ?? ""}
    />
  </>
}