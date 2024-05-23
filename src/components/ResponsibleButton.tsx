interface ResponsibleButtonProps {
  text: string,
  onClick?: VoidFunction,
  style?: string,
  type?: "button" | "submit" | "reset" | undefined,
}

export function ResponsibleButton(props: ResponsibleButtonProps) {
  return <>
    <button onClick={props.onClick} type={props.type} className={`
      mt-4 mb-2 
      bg-neutral-800 hover:bg-black 
      block 
      w-full
      rounded-full
      py-2 
      text-xl text-white 
      transition-all duration-300  
      
      md:text-sm
      
      lg:mt-12
      lg:rounded-md
      ${props.style}
      `} >{props.text}</button>
  </>;
}