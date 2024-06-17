interface SpinnerProps {
  style?: string;
}

export function Spinner(props: SpinnerProps) {
  return <>
    <span className={`loader mx-auto max-h-max max-w-max ${props.style}`}></span>
  </>
}