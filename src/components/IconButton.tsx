import { PropsWithChildren } from "react";

interface FloatingButtonProps {
	onClick: VoidFunction;
	style?: string
}

export function IconButton(props: PropsWithChildren<FloatingButtonProps>) {
	return <>
		<button className="h-full ms-2 z-20 cursor-default" >
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
				{props.children}
			</span>
		</button>
	</>
}