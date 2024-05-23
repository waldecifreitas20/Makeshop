import { ResponsibleInput } from "./ResponsibleInput";

interface InputBlockProps { label: string, type?: string, placeholder?: string };

export function InputBlock(props: InputBlockProps) {
  return <div className="my-4">
    <label htmlFor="">{props.label}</label>
    <ResponsibleInput type={props.type ?? "text"} placeholder={props.placeholder ?? ""} />
  </div>
}