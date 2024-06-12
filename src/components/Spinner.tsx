interface SpinnerProps {
  style: string;
}

export function Spinner(props: SpinnerProps) {
  return <>
    <span className={`loader mx-auto ${props.style}`}></span>
  </>
}