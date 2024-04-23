interface PillButton {
    text: string;
    style: string;
}

export function PillButton(props: PillButton) {
    return <>
        <a className={`
            block py-2 mb-2 
            rounded-full
            ${props.style} 
            text-white 
            
            transition-all duration-300`}
            href="">
            {props.text}
        </a>
    </>
}