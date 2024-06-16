import React, { Children, PropsWithChildren, ReactElement } from "react";


interface ResponsibleComponent extends PropsWithChildren {
  style?: string;
  children?: React.JSX.Element | Array<React.JSX.Element>;
}

export function ResponsibleComponent(props: ResponsibleComponent) {

  const responsibleClass = `
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
  `
  const responsibleChildren = Children.map((props.children ?? []), (child: ReactElement) => {

    if (child.type === 'select' || child.type === 'input') {
      return React.cloneElement(child, {
        className: responsibleClass
      });
    }
    return child;
  });

  return <>
    <div className={props.style ?? ""}>
      {responsibleChildren}
    </div>
  </>
}




