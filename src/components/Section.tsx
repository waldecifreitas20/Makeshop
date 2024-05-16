import { PropsWithChildren } from "react";

interface SectionProps {
	title?: string;
	description?: string;
	style?: string;
}

export function Section(props: PropsWithChildren<SectionProps>) {
	return <>
		<section className={`${props.style}`}>
			{props.title ? <h2 className="uppercase text-2xl mb-4">{props.title}</h2> : <></>}
			{props.description ? <p>{props.description}</p> : <></>}
			{props.children}
		</section>
	</>
}