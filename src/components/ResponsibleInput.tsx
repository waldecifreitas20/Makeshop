interface ResponsibleInputProps {
  placeholder?: string;
  type?: string;
}

export function ResponsibleInput(props: ResponsibleInputProps) {
  return <>
    <input
      className="
        block 
        border border-zinc-400 rounded-full 
        w-full 
        px-5 py-2 
        text-lg
  
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