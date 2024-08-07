interface PillProps {
	text: string
	style?: string
	linkTo?: string
}

export function Pill(props: PillProps) {
	return (
		<a href={props.linkTo ?? ""}
			className={`
				flex items-center justify-center
				bg-white
				border 
				rounded-full 
				mx-1 px-3 py-1 
				text-sm text-nowrap
			${props.style ?? ""}
	`}>{props.text}</a>
	);
}