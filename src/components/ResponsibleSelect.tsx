import React, { Children, PropsWithChildren, ReactElement, ReactNode } from "react";

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
interface ResponsibleComponent { }

export function ResponsibleComponent(props: PropsWithChildren<any>) {
  const responsibleChildren = Children.map(props.children, (child: ReactElement) => {
    const responsibleElement = React.cloneElement(child, { className: responsibleClass });

    return <><div>{responsibleElement}</div></>
  });

  return <>{responsibleChildren}</>
}




