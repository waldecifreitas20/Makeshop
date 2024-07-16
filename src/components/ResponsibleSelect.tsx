import React, { ChangeEventHandler, PropsWithChildren } from "react";


interface ResponsibleSelect extends PropsWithChildren {
  id?: string;
  style?: string;
  children?: React.JSX.Element | Array<React.JSX.Element>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export function ResponsibleSelect(props: ResponsibleSelect) {

  const responsibleClass = `
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
  `
  return (
    <select
      id={props.id ?? Math.random().toString()}
      onChange={props.onChange}
      className={`${responsibleClass} ${props.style ?? ""}`}>
      {props.children}
    </select>
  );
}




