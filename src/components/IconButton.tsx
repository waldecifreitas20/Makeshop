import { ReactElement } from "react";

interface FloatingButtonProps {
    onClick: VoidFunction;
    child: ReactElement;
    positionClass: string
    style:string
}


export function IconButton(props: FloatingButtonProps) {
    return <>
        <button className={`absolute ${props.positionClass} h-full ms-2 z-20 cursor-default`} >
            <span className={
                `
                ${props.style}
                cursor-pointer 
                transition-all 
                duration-300 h-12 w-12 
                flex items-center justify-center 
                
                rounded-full 
                p-4`
            }

                onClick={() => props.onClick()}
            >
                {props.child}
            </span>
        </button>
    </>
}