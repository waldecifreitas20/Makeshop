import { ReactElement } from "react";

interface FloatingButtonProps {
    onClick: VoidFunction;
    child: ReactElement;
    positionClass: string
    style?:string
}


export function IconButton(props: FloatingButtonProps) {
    return <>
        <button className={`absolute ${props.positionClass} h-full ms-2 z-20 cursor-default`} >
            <span className={
                `
                ${props.style}
                cursor-pointer 
                transition-all 
                duration-300
                flex items-center justify-center
                rounded-full 
                `
            }

                onClick={() => props.onClick()}
            >
                {props.child}
            </span>
        </button>
    </>
}