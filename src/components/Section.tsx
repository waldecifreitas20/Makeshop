interface SectionProps {
    title?: string;
    description?: string;
    style?: string;
    child: JSX.Element;
}

export function Section(props: SectionProps) {
    return <>
        <section className={`${props.style} mt-4`}>
            {props.title ? <h2 className="uppercase text-2xl ml-4 mb-4">{props.title}</h2> : <></>}
            {props.description ? <p>{props.description}</p> : <></>}
            {props.child}
        </section>
    </>
}