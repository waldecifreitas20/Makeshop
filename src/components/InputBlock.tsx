import { ResponsibleInput } from "./ResponsibleInput";


interface InputBlockProps {
  label: string,
  type?: string,
  placeholder?: string,
  margins?:string,
};

export function InputBlock(props: InputBlockProps) {
  return <div className={`${props.margins ?? "m-2"} w-full`}>
    <label htmlFor="">{props.label}</label>
      <ResponsibleInput type={props.type ?? "text"} placeholder={props.placeholder ?? ""} />
  </div>
}