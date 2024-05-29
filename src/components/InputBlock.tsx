import { ResponsibleInput } from "./ResponsibleInput";


interface InputBlockProps {
  label: string,
  inputId: string,
  type?: string,
  placeholder?: string,
  margins?:string,
};

export function InputBlock(props: InputBlockProps) {
  return <div className={`${props.margins ?? "my-2"} w-full`}>
    <label htmlFor={props.inputId}>{props.label}</label>
      <ResponsibleInput id={props.inputId} type={props.type ?? "text"} placeholder={props.placeholder ?? ""} />
  </div>
}