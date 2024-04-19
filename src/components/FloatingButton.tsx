import { ReactElement } from "react";

interface FloatingButtonProps {
    onClick: VoidFunction;
    child: ReactElement;
    positionClass: string
}


export function FloatingButton(props: FloatingButtonProps) {
    return <>
        <button className={`absolute ${props.positionClass} h-full ms-2 z-40`} onClick={() => props.onClick()}>
            <span className="bg-black  transition-all duration-300 h-12 w-12 flex items-center justify-center bg-opacity-20 hover:bg-opacity-60 text-white rounded-full p-4">
                {props.child}
            </span>
        </button>
    </>
}