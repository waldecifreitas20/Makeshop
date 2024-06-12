interface SpinnerProps {
  style?: string;
}

export function Spinner(props: SpinnerProps) {
  return <>
    <span className={`loader mx-auto size-[25px] ${props.style}`}></span>
  </>
}