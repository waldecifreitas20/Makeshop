interface FormWarningProps {
  isValid: CallableFunction;
  message: string;
}
export function FormWarning(props: FormWarningProps) {
  return <>
    <li className={
      `
      flex items-baseline
      ${props.isValid() ?
        "text-green-500" : "text-red-500"
      }
      `
    }>
      {props.isValid() ?
        <i className="fa-solid fa-circle-check fa-sm"></i>
        :
        <i className="fa-solid fa-circle-xmark fa-sm "></i>
      }
      <span className="ml-1 capitalize text-sm">
        {props.message}
      </span>
    </li>
  </>
}